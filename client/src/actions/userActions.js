import axios from "axios";
import { setUser } from "../reducers/userReducer";

export const signup = async ({ email, password }) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
      email,
      password,
    });
    alert(response.data.message);
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/auth/login`, {
        email,
        password,
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
