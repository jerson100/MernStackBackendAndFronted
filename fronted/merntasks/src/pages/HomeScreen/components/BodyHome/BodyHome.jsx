import React from "react";
import { useMemo } from "react";
import md5 from "md5";
import useAuthContext from "../../../../hooks/useAuthContext";
import "./bodyHome.scss";

const BodyHome = () => {
  return (
    <div className="body-home">
      <Header />
      <Body />
    </div>
  );
};

const Header = () => {
  const {
    user: { user },
    logout,
  } = useAuthContext();
  const hashImageGravatar = useMemo(() => md5(user.email), [user.email]);
  return (
    <header className="body-home__header">
      <nav className="body-home__nav">
        <div className="body-home__user">
          <p className="body-home__user-name">
            Hola <strong>{user.name}</strong>
          </p>
          <img
            src={`https://www.gravatar.com/avatar/${hashImageGravatar}?d=robohash&s=24`}
            alt={user.name}
            className="body-home__user-img"
          />
        </div>
        <span className="body-name__logout" onClick={logout}>
          Cerrar Sesión
        </span>
      </nav>
    </header>
  );
};

const Body = () => {
  return <div>Selecciona un proyecto</div>;
};

export default BodyHome;
