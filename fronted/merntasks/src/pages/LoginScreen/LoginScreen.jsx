import React from "react";
import { useEffect } from "react";
import FullCenter from "../../components/FullCenter/FullCenter";
import LoginForm from "../../components/Login/LoginForm/LoginForm";
import "./loginScreen.scss";

const LoginScreen = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <FullCenter color="darken">
      <div className="login-screen">
        <div className="login-screen__content">
          <h1 className="login-screen__title">Inicar Sesión</h1>
          <LoginForm to="/" />
        </div>
      </div>
    </FullCenter>
  );
};

export default LoginScreen;
