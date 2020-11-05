import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import InputGroup from "../../Inputs/InputGroup/InputGroup";
import useNotification from "../../Notification/useNotification";
import PropTypes from "prop-types";
import "./loginForm.scss";
import useForm from "../../../hooks/useForm";
import useAuthContext from "../../../hooks/useAuthContext";
import { authLogin } from "../../../services/auth";
import { useState } from "react";
import Validate from "../../../helpers/validations";

const LoginForm = ({ to }) => {
  const { notify } = useNotification();
  const { login } = useAuthContext();
  const { form, handleChange } = useForm({ email: "", password: "" });
  const [loading, setloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let msg;
    if ((msg = validateForm())) {
      notify({
        type: "error",
        title: "Verifique sus datos",
        description: msg,
        time: 5000,
      });
      return;
    }
    setloading(true);
    try {
      const {
        data: { data },
      } = await authLogin(form);
      login(data);
    } catch (e) {
      notify({
        type: "error",
        title: "Error de logueo",
        description: e.message,
        time: 5000,
      });
      setloading(false);
    }
    // login();
  };

  function validateForm() {
    const { email, password } = form;
    if (!email) {
      return "El email es requerido";
    } else if (!password) {
      return "El password es requerido";
    }
    const emailMsg = Validate.User.email(email);
    return emailMsg;
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <InputGroup isHorizont>
        <InputGroup.Label htmlFor="email">Email:</InputGroup.Label>
        <InputGroup.Input
          type="text"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
          rounded
          placeholder="Email"
        />
      </InputGroup>
      <InputGroup isHorizont>
        <InputGroup.Label htmlFor="password">Password:</InputGroup.Label>
        <InputGroup.Input
          type="password"
          name="password"
          rounded
          id="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Button rounded fullWidth isLoading={loading}>
          Acceder
        </Button>
      </InputGroup>
      <Link to="/auth/register">Obtener cuenta</Link>
    </form>
  );
};

LoginForm.propTypes = {
  to: PropTypes.string.isRequired,
};

LoginForm.defaultProps = {
  to: "",
};

export default LoginForm;
