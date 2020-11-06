import React from "react";
import PropTypes from "prop-types";
import "./proyect.scss";
import useProyectContext from "../../../../../../hooks/useProyectContext";
import proyect from "../../../../../../services/proyect";
import useNotification from "../../../../../../components/Notification/useNotification";
import { useState } from "react";
import FullCenter from "../../../../../../components/FullCenter/FullCenter";
import Loader from "../../../../../../components/Loader/Loader";

const Proyect = ({ _id, name, selectProyect }) => {
  const { remove } = useProyectContext();
  const { notify } = useNotification();
  const [loading, setloading] = useState(false);
  const removeProyect = async () => {
    setloading(true);
    try {
      const resp = await proyect.remove({ _id });
      remove(_id);
      notify({
        type: "success",
        title: "Ok!",
        description: "El proyecto se eliminó correctament",
        time: 6000,
      });
    } catch (e) {
      if (e.status) {
        notify({
          type: "error",
          title: "No se pudo eliminar",
          description: e.message,
          time: 6000,
        });
      }
    } finally {
      setloading(false);
    }
  };
  return (
    <>
      <div className="proyect" onClick={selectProyect}>
        <div className="proyect__name">
          {name}{" "}
          <span className="proyect__close" onClick={() => removeProyect()}>
            x
          </span>
        </div>
      </div>
      {loading && (
        <FullCenter fixed color="darkenTransparent">
          <Loader color="red" size="xxl" />
        </FullCenter>
      )}
    </>
  );
};

Proyect.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selectProyect: PropTypes.func,
};

Proyect.defaultProps = {
  selectProyect: () => {},
};

export default Proyect;
