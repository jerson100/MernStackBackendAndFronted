import React, { useState } from "react";
import useNotification from "../../../../../../components/Notification/useNotification";
import useProyectContext from "../../../../../../hooks/useProyectContext";
import ProyectService from "../../../../../../services/proyect";
import Button from "../../../../../../components/Button/Button";
import InputGroup from "../../../../../../components/Inputs/InputGroup/InputGroup";
import useForm from "../../../../../../hooks/useForm";

const AddProyect = () => {
  const [loadingCreateProyect, setloadingCreateProyect] = useState(false);
  const { add } = useProyectContext();
  const { notify } = useNotification();

  const { form, handleChange, resetForm } = useForm({ name: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name) {
      notify({
        type: "warning",
        title: "No se pudo crear el proyecto",
        description: "El nombre del proyecto no puede estar vacío",
        time: 5000,
      });
      return;
    }
    setloadingCreateProyect(true);
    try {
      const {
        data: {
          data: { proyect },
        },
      } = await ProyectService.add(form);
      //   console.log(proyect);
      add(proyect);
      notify({
        type: "success",
        title: "Ok!",
        decsription: "Proyecto creado satisfactoriamente.",
        time: 5000,
      });
      resetForm();
    } catch (e) {
      //   moficar esto, por ahora validamos si tiene un estado
      //   el error - 500, 400, etc. Solo en esos casos mostramos el mensaje de error.
      //   no es del todo elegante, así que se modificará...
      if (e.status) {
        const { message } = e;
        notify({
          type: "error",
          title: "Error",
          description: message,
          time: 5000,
        });
      }
    } finally {
      setloadingCreateProyect(false);
    }
  };

  return (
    <div className="add-proyect">
      <form className="add-proyect__form" onSubmit={handleSubmit}>
        <InputGroup>
          <InputGroup.Input
            placeholder="Nombre Proyecto"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </InputGroup>
        <Button
          rounded
          fullWidth
          isLoading={loadingCreateProyect}
          textLoading="Creando proyecto"
        >
          Agregar Proyecto
        </Button>
      </form>
    </div>
  );
};

export default AddProyect;
