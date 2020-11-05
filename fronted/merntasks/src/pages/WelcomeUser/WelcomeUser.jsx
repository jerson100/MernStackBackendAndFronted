import React from "react";
import { Link } from "react-router-dom";
import "./welcomeUser.scss";

const WelcomeUser = ({ email }) => {
  return (
    <div class="welcome-user">
      <div className="welcome-user__content">
        <p className="welcome-user__text">
          Gracias {email} por registrarte con éxito, por favor inicie sesión.
        </p>
        <Link className="welcome-user__link" to="/auth/login">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default WelcomeUser;
