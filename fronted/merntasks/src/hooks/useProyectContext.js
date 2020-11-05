import { useContext } from "react";
import { ProyectContext } from "../providers/ProyectProvider";

const useProyectContext = () => {
  const context = useContext(ProyectContext);
  if (!context) {
    throw new Error("El componente no puede acceder a este contexto");
  } else {
    return {
      proyects: context.proyects,
      remove: context.remove,
      update: context.update,
      add: context.add,
      loadingInitProyects: context.loadingInitProyects,
    };
  }
};

export default useProyectContext;
