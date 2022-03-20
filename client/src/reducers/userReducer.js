const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";

const defaultReducer = {
  currentUser: {},
  isAuth: false,
};

export const userReducer = (state = defaultReducer, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        currentUser: payload.user,
        isAuth: true,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    default:
      return state;
  }
};

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setLogout = () => ({ type: LOGOUT });
