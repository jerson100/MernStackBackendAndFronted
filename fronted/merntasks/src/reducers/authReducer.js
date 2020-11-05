export const ACTIONS = {
  LOGIN: "[auth]login",
  LOGOUT: "[auth]logout",
};

export const defaultValues = {
  user: {},
  isLogued: false,
};

export const authReducer = (state, action) => {
  //   console.log(action);
  switch (action.type) {
    case ACTIONS.LOGIN:
      const { user } = action.payload;
      return {
        user,
        isLogued: true,
      };
    case ACTIONS.LOGOUT:
      return {
        user: {},
        isLogued: false,
      };
    default:
      return state;
  }
};
