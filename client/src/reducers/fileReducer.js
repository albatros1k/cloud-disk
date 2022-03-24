const SET_FILES = "SET_FILES";
const SET_CURRENT_DIR = "SET_CURRENT_DIR";
const ADD_FILE = "ADD_FILE";
const TOGGLE_POPUP = "TOGGLE_POPUP";

const defaultReducer = {
  files: [],
  currentDir: null,
  isPopup: false,
};

export const fileReducer = (state = defaultReducer, { type, payload }) => {
  switch (type) {
    case SET_FILES:
      return { ...state, files: payload };
    case ADD_FILE:
      return { ...state, files: [...state.files, payload] };
    case TOGGLE_POPUP:
      return { ...state, isPopup: !state.isPopup };
    case SET_CURRENT_DIR:
      return { ...state, currentDir: payload };
    default:
      return state;
  }
};

export const setFiles = (files) => ({ type: SET_FILES, payload: files });
export const setCurrentDir = (curr) => ({ type: SET_CURRENT_DIR, payload: curr });
export const addFile = (file) => ({ type: ADD_FILE, payload: file });
export const togglePopup = () => ({ type: TOGGLE_POPUP });
