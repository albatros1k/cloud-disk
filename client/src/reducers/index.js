import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { userReducer } from "./userReducer";
import { fileReducer } from "./fileReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  files: fileReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
