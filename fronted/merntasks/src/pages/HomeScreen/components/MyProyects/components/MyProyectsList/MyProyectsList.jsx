import React from "react";
import PropTypes from "prop-types";
import "./myProyectsList.scss";
import Loader from "../../../../../../components/Loader/Loader";
import Proyect from "../Proyect/Proyect";
// import { useEffect } from "react";

const MyProyectsList = ({ proyects, loadingProyects, selectProyect }) => {
  //   useEffect(() => {
  //     console.log("Render my proyect list...");
  //   }, []);
  return (
    <ul className="myProyectsList">
      {loadingProyects ? (
        <>
          <Loader type="rectangleSkeleton" size={"xxl"} />
          <Loader type="rectangleSkeleton" size={"xxl"} />
          <Loader type="rectangleSkeleton" size={"xxl"} />
          <Loader type="rectangleSkeleton" size={"xxl"} />
          <Loader type="rectangleSkeleton" size={"xxl"} />
          <Loader type="rectangleSkeleton" size={"xxl"} />
          <Loader type="rectangleSkeleton" size={"xxl"} />
        </>
      ) : proyects.length > 0 ? (
        proyects.map((p) => (
          <li className="myProyectsList__item" key={p._id}>
            <Proyect
              name={p.name}
              _id={p._id}
              selectProyect={() => selectProyect(p)}
            />
          </li>
        ))
      ) : (
        <p className="myProyectsList__text">
          No hay proyectos, comienza creando uno.
        </p>
      )}
    </ul>
  );
};

MyProyectsList.propTypes = {
  proyects: PropTypes.array.isRequired,
  loadingProyects: PropTypes.bool.isRequired,
};

export default MyProyectsList;
