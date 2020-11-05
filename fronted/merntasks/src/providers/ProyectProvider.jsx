import React, { useReducer, createContext, useCallback } from "react";
import { useEffect } from "react";
import proyectReducer, {
  ACTIONS_PROYECT,
  DEFAULTVALUES_PROYECT,
} from "../reducers/proyectReducer";
import ProyectService from "../services/proyect";

export const ProyectContext = createContext();

const ProyectProvider = ({ children }) => {
  const [{ proyects, loadingInitProyects }, dispatch] = useReducer(
    proyectReducer,
    DEFAULTVALUES_PROYECT
  );

  useEffect(() => {
    const myProyects = async () => {
      try {
        const {
          data: {
            data: { proyects },
          },
        } = await ProyectService.all();
        dispatch({ type: ACTIONS_PROYECT.ALL, payload: proyects });
      } catch (e) {
        console.log(e);
      } finally {
        dispatch({ type: ACTIONS_PROYECT.CLOSE_LOADING_INIT_PROYECTS });
      }
    };
    myProyects();
  }, [dispatch]);

  const add = useCallback(
    ({ _id, name, status }) => {
      dispatch({ type: ACTIONS_PROYECT.ADD, payload: { _id, name, status } });
    },
    [dispatch]
  );

  const remove = useCallback(
    (_id) => {
      dispatch({ type: ACTIONS_PROYECT.REMOVE, payload: _id });
    },
    [dispatch]
  );

  const update = useCallback(
    ({ _id, name, status }) => {
      dispatch({
        type: ACTIONS_PROYECT.UPDATE,
        payload: { _id, name, status },
      });
    },
    [dispatch]
  );

  return (
    <ProyectContext.Provider
      value={{ proyects, add, remove, update, loadingInitProyects }}
    >
      {children}
    </ProyectContext.Provider>
  );
};

export default ProyectProvider;
