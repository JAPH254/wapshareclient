import { loginSuccess, registerSuccess } from "./userSlice";
import axios from "axios";
import { ApiDomain } from "../assets/utils";

export const loginUser = async (state, dispatch) => {
  try {
    const res = await axios.post(`${ApiDomain}/auth/login`, state);
    const data = await res.data;
    dispatch(loginSuccess(data));
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    alert(error.message);
  }
};

export const registerUser = async (state, dispatch) => {
  try {
    const res = await axios.post(`${ApiDomain}/auth/register`,state);
    const data = await res.data;
    dispatch(registerSuccess(data));
    alert(data.message);
  } catch (error) {
    alert(error.message);
  }
};
