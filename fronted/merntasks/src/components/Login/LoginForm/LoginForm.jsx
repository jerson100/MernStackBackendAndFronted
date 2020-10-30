import React from "react";
import Button from "../../Button/Button";
import InputGroup from "../../Inputs/InputGroup/InputGroup";
import useNotification from "../../Notification/useNotification";
import "./loginForm.scss";

const LoginForm = () => {
  const { notify } = useNotification();
  const handleSubmit = (e) => {
    e.preventDefault();
    notify({
      type: "error",
      title: "Error de logueo",
      description: "Su cuenta está inactiva",
      time: 5000,
      //   handleMore: () => {
      //     alert("Handle more...");
      //   },
    });
  };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <InputGroup isHorizont>
        <InputGroup.Label htmlFor="email">Email:</InputGroup.Label>
        <InputGroup.Input
          type="text"
          name="email"
          id="email"
          rounded
          placeholder="Email"
        />
      </InputGroup>
      <InputGroup isHorizont>
        <InputGroup.Label htmlFor="password">Password:</InputGroup.Label>
        <InputGroup.Input
          type="text"
          rounded
          id="password"
          placeholder="Password"
        />
      </InputGroup>
      <InputGroup>
        <Button rounded fullWidth>
          Acceder
        </Button>
      </InputGroup>
      <a href="#">Obtener Cuenta</a>
    </form>
  );
};

export default LoginForm;
