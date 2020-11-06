import React, { useState } from "react";
import Button from "../../../../../../components/Button/Button";
import AddProyect from "../AddProyect/AddProyect";
import "./newProyect.scss";

const NewProyect = () => {
  const [showNewProyect, setshowNewProyect] = useState(false);

  const handleNewProyect = () => {
    setshowNewProyect((prev) => !prev);
  };
  return (
    <div className="new-proyect">
      <Button rounded fullWidth onclick={handleNewProyect}>
        Nuevo Proyecto
      </Button>
      {showNewProyect && (
        <div className="new-proyect__add">
          <AddProyect handleNewProyect={handleNewProyect} />
        </div>
      )}
    </div>
  );
};

export default NewProyect;
