const defaultReducer = {
  currentUser: {},
  isAuth: false,
};

export const userReducer = (state = defaultReducer, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
