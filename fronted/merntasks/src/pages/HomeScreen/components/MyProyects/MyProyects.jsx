import React from "react";
import useProyectContext from "../../../../hooks/useProyectContext";
import MyProyectsList from "./components/MyProyectsList/MyProyectsList";
import NewProyect from "./components/NewProyect/NewProyect";
import "./myProyects.scss";

const MyProyects = ({ selectProyect }) => {
  const { proyects, loadingInitProyects } = useProyectContext();
  return (
    <div className="myProyects">
      <div className="myProyects__header">
        <NewProyect />
      </div>
      <div className="myProyects__body">
        <h2 className="myProyects__title">Tus Proyectos</h2>
        <MyProyectsList
          proyects={proyects}
          loadingProyects={loadingInitProyects}
          selectProyect={selectProyect}
        />
      </div>
    </div>
  );
};

export default MyProyects;
