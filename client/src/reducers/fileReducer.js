const SET_FILES = "SET_FILES";
const SET_CURRENT_DIR = "SET_CURRENT_DIR";

const defaultReducer = {
  files: [],
  currentDir: null,
};

export const fileReducer = (state = defaultReducer, { type, payload }) => {
  switch (type) {
    case SET_FILES:
      return { ...state, files: payload };
    case SET_CURRENT_DIR:
      return { ...state, currentDir: payload };
    default:
      return state;
  }
};

export const setFiles = (files) => ({ type: SET_FILES, payload: files });
export const setCurrentDir = (curr) => ({ type: SET_CURRENT_DIR, payload: curr });
