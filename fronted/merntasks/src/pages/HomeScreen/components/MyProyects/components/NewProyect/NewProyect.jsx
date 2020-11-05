import React, { useState } from "react";
import Button from "../../../../../../components/Button/Button";
import AddProyect from "../AddProyect/AddProyect";
import "./newProyect.scss";

const NewProyect = () => {
  const [showNewProyect, setshowNewProyect] = useState(false);

  const handleNewProyect = () => {
    setshowNewProyect(true);
  };
  return (
    <div className="new-proyect">
      <Button rounded fullWidth onclick={handleNewProyect}>
        Nuevo Proyecto
      </Button>
      {showNewProyect && (
        <div className="new-proyect__add">
          <AddProyect />
        </div>
      )}
    </div>
  );
};

export default NewProyect;
