import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import ProyectProvider from "../../providers/ProyectProvider";
import BodyHome from "./components/BodyHome/BodyHome";
import MyProyects from "./components/MyProyects/MyProyects";
import "./homeScreen.scss";

const HomeScreen = () => {
  const [currentSelectProyect, setcurrentSelectProyect] = useState(null);

  const selectProyect = useCallback(
    (p) => {
      console.log(p);
      setcurrentSelectProyect(p);
    },
    [setcurrentSelectProyect]
  );

  return (
    <ProyectProvider>
      <div className="home-screen">
        <div className="home-screen__content">
          <div className="home-screen__left">
            <h1 className="home-screen__title">
              <span>MERN</span>
              <span>Tasks</span>
            </h1>
            <MyProyects selectProyect={selectProyect} />
          </div>
          <div className="home-screen__right">
            <BodyHome currentProyect={currentSelectProyect} />
          </div>
        </div>
      </div>
    </ProyectProvider>
  );
};

export default HomeScreen;
