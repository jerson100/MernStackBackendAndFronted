import React from "react";
import FullCenter from "../../components/FullCenter/FullCenter";
import LoginForm from "../../components/Login/LoginForm/LoginForm";
import NotificationProvider from "../../components/Notification/NotificationProvider";
import "./loginScreen.scss";

const LoginScreen = () => {
  return (
    <NotificationProvider>
      <FullCenter color="darken">
        <div className="login-screen">
          <div className="login-screen__content">
            <h1 className="login-screen__title">Inicar Sesión</h1>
            <LoginForm />
          </div>
        </div>
      </FullCenter>
    </NotificationProvider>
  );
};

export default LoginScreen;
