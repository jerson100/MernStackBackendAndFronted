import React from "react";
import PropTypes from "prop-types";
import "./proyect.scss";
import useProyectContext from "../../../../../../hooks/useProyectContext";
import proyect from "../../../../../../services/proyect";
import useNotification from "../../../../../../components/Notification/useNotification";

const Proyect = ({ _id, name, selectProyect }) => {
  const { remove } = useProyectContext();
  const { notify } = useNotification();
  const removeProyect = async () => {
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
    }
  };
  return (
    <div className="proyect" onClick={selectProyect}>
      <div className="proyect__name">
        {name}{" "}
        <span className="proyect__close" onClick={() => removeProyect()}>
          x
        </span>
      </div>
    </div>
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
