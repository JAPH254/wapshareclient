import { loginSuccess, registerSuccess } from "./userSlice";
import { getComments, getPostsSuccess } from "./postsSlice";
import axios from "axios";
import { ApiDomain } from "../assets/utils";
import { getStories } from "./storiesSlice";

export const loginUser = async (state, dispatch) => {
  try {
    const res = await axios.post(`${ApiDomain}/auth/login`, state);
    const data = await res.data;
    dispatch(loginSuccess(data));
  } catch (error) {
    alert(error.message);
    console.log(error);

  }
};

export const registerUser = async (state, dispatch) => {
  try {
    const res = await axios.post(`${ApiDomain}/auth/register`, state);
    const data = await res.data;
    dispatch(registerSuccess(data));
    alert(data.message);
  } catch (error) {
    alert(error.message);
    console.log(error);

  }
};

export const fetchPosts = async (user, dispatch) => {
  try {
    const res = await axios.get(`${ApiDomain}/posts`, {
      headers: { Authorization: `${user.token}` },
    });
    const data = await res.data;
    dispatch(getPostsSuccess(data));
  } catch (error) {
    alert(error.message);
    console.log(error);
  }
};
export const fetchComments = async ( dispatch) => {
  try {
    const res = await axios.get(`${ApiDomain}/comments`);
    const data = await res.data;
    console.log(data);
    dispatch(getComments(data));
  } catch (error) {
    alert(error.message);
  }
};

export const fetchStories=async(user, dispatch)=>{
try {
  const res = await axios.get(`${ApiDomain}/stories`, {
    headers: { Authorization: `${user.token}` },
  });
  const data=await res.data;
  dispatch(getStories(data));
} catch (error) {
  alert(error.message)
  console.log(error);

  }
};

export const deleteaccount = async (user, dispatch) => {
  try {
    const res = await axios.delete(`${ApiDomain}/users/${user.USERID}`);
    console.log(res);
    dispatch(removeUser(user.USERID));
    localStorage.removeItem("user");
    navigate("/login");
  } catch (error) {
    console.log(error);
    navigate("/");
  }
}