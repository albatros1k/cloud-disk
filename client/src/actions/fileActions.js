import axios from "axios";
import { addFile, setFiles } from "../reducers/fileReducer";

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

export const createDir = (dirId, name) => async (dispatch) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/files`,
      { name, parent: dirId, type: "dir" },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );

    dispatch(addFile(response.data));
  } catch (error) {
    alert(error.response.data.message);
  }
};
