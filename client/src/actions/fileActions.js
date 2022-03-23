import axios from "axios";
import { setFiles } from "../reducers/fileReducer";

export const getFiles = (dirId) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/files${dirId ? "?parent=" + dirId : ""}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    dispatch(setFiles(response.data));
  } catch (error) {
    console.log(error);
    localStorage.removeItem("token");
  }
};
