import axios from "axios";

export const registration = async (data) => {
  try {
    const response = await axios.post(`http://localhost:5000/api/auth/registration`, data);
    alert(response.data.message);
  } catch (error) {
    alert(error);
  }
};
