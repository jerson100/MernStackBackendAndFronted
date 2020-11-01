export const ACTIONS = {
  LOGIN: "[auth]login",
  LOGOUT: "[auth]logout",
};

export const defaultValues = {
  user: {},
  isLogued: false,
  token: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      const { user, token } = action.payload;
      return {
        user,
        isLogued: true,
        token,
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
