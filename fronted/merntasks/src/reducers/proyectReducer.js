export const ACTIONS_PROYECT = {
  ADD: "[proyect]Add",
  ALL: "[proyect]All",
  REMOVE: "[proyect]Remove",
  UPDATE: "[proyect]Update",
  CLOSE_LOADING_INIT_PROYECTS: "[proyect]loadingInitProyect",
};

export const DEFAULTVALUES_PROYECT = {
  proyects: [],
  loadingInitProyects: true,
};

const proyectReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS_PROYECT.ADD:
      const proyect = action.payload;
      return { ...state, proyects: [proyect, ...state.proyects] };
    case ACTIONS_PROYECT.REMOVE:
      const id = action.payload;
      return { ...state, proyects: state.proyects.filter((p) => p._id !== id) };
    case ACTIONS_PROYECT.UPDATE:
      return state;
    case ACTIONS_PROYECT.ALL:
      const proyects = action.payload;
      return { ...state, proyects: [...proyects] };
    case ACTIONS_PROYECT.CLOSE_LOADING_INIT_PROYECTS:
      return { ...state, loadingInitProyects: false };
    default:
      return state;
  }
};

export default proyectReducer;
