import axios from "axios";
import { login } from "./userSlice";
export const loginUser = async (state, dispatch) => {
    try{
       const res = await axios.post("http://localhost:8082/auth/login", state);
  const user = await res.data;
  dispatch(login(user)); 
  console.log(user);
    }catch(error){
        alert(error.message)
    }
};
