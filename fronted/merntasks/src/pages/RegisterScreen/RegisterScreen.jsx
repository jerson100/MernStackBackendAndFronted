import React, { useEffect } from "react";
import { useState } from "react";
import Button from "../../components/Button/Button";
import FullCenter from "../../components/FullCenter/FullCenter";
import InputGroup from "../../components/Inputs/InputGroup/InputGroup";
import Loader from "../../components/Loader/Loader";
import useNotification from "../../components/Notification/useNotification";
import Validate from "../../helpers/validations";
import useForm from "../../hooks/useForm";
import { createUser } from "../../services/user";
import "./registerScreen.scss";
import WelcomeUser from "../WelcomeUser";

const RegisterScreen = () => {
  const [loadingPage, setLoadingPage] = useState(true);
  const [loadingRegister, setLoadingRegister] = useState(false);
  const [exitedRegister, setExitedRegister] = useState(false);
  const { notify } = useNotification();
  const { form, handleChange } = useForm({
    email: "",
    name: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    document.title = "Register";
    setLoadingPage(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ErrorMessage = validateForm();
    if (ErrorMessage) {
      notify({
        type: "error",
        title: "Datos incorrectos",
        description: ErrorMessage,
        time: 5000,
      });
      return;
    }
    setLoadingRegister(true);
    // console.log(form);
    try {
      const newUser = await createUser(form);
      console.log(newUser);
      setExitedRegister(true);
    } catch (e) {
      console.log(e);
      notify({
        type: "error",
        title: "Datos incorrectos",
        description: e.message,
        time: 5000,
      });
      setLoadingRegister(false);
    }
  };

  function validateForm() {
    const { email, name, password, password_confirmation } = form;
    if (!email) {
      return "El email es requerido";
    } else if (!name) {
      return "El nombre es requerido";
    } else if (!password) {
      return "El password es requerido";
    } else if (!password_confirmation) {
      return "La confirmación del password es requerido";
    } else {
      const vName = Validate.User.name(name);
      if (vName) return vName;
      const vEmail = Validate.User.email(email);
      if (vEmail) return vEmail;
      const vPass = Validate.User.password(password);
      if (vPass) return vPass;
      return password !== password_confirmation
        ? "Las contraseñas no coinciden."
        : "";
    }
  }

  if (loadingPage) {
    return <Loader size="xxl" />;
  }

  return (
    <FullCenter>
      <div className="register-user">
        <div className="register-user__content">
          {!exitedRegister ? (
            <>
              <h1 className="register-user__title">Regístrate</h1>
              <form className="register-user__form" onSubmit={handleSubmit}>
                <InputGroup>
                  <InputGroup.Label htmlFor="email">Email: </InputGroup.Label>
                  <InputGroup.Input
                    placeholder="Email"
                    id="email"
                    rounded
                    value={form.email}
                    name="email"
                    onChange={(e) => handleChange(e)}
                    type="email"
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroup.Label htmlFor="nombres">
                    Nombres:{" "}
                  </InputGroup.Label>
                  <InputGroup.Input
                    placeholder="Nombres"
                    id="nombres"
                    rounded
                    value={form.name}
                    name="name"
                    onChange={(e) => handleChange(e)}
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroup.Label htmlFor="password">
                    Password:{" "}
                  </InputGroup.Label>
                  <InputGroup.Input
                    placeholder="Password"
                    id="password"
                    rounded
                    value={form.password}
                    name="password"
                    onChange={(e) => handleChange(e)}
                    type="password"
                  />
                </InputGroup>
                <InputGroup>
                  <InputGroup.Label htmlFor="passwordR">
                    Confirmar P:{" "}
                  </InputGroup.Label>
                  <InputGroup.Input
                    placeholder="Confirmation Password"
                    id="passwordR"
                    rounded
                    value={form.passwordR}
                    name="password_confirmation"
                    onChange={(e) => handleChange(e)}
                    type="password"
                  />
                </InputGroup>
                <Button fullWidth isLoading={loadingRegister}>
                  Crear cuenta
                </Button>
              </form>
            </>
          ) : (
            <WelcomeUser />
          )}
        </div>
      </div>
    </FullCenter>
  );
};

export default RegisterScreen;
