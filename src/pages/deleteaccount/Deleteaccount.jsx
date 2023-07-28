import "./Deleteaccount.css";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ApiDomain } from "../../assets/utils";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteaccount } from "../../store/reducerAPI";

const Deleteaccount = () => {
  const user = useSelector((store) => store.user.user);
  console.log(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = async () => {
    try {
      const res = await axios.delete(`${ApiDomain}users/${user.USERID}`);
      console.log(res);
      dispatch(deleteaccount(user.USERID));
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.log(error);
      //delay for 5 seconds
      setTimeout(() => {
        //remove the user from the local storage
        localStorage.removeItem("user");
        alert("Account deleted successfully");
        navigate("/");
      }, 5000);
    }
  };
  const handlecanceldel = () => {
    navigate("/dashboard");
  };

  return (
    <div className="delete">
      <div className="deletecontent">
        <h1>Are you sure you want to delete your account?</h1>
        <p>
          Deleting your account will permanently remove all of your data from
          our servers. This includes all of your posts, comments, and messages.
        </p>
        <div className="deletebuttons">
          <button className="deletebutton" onClick={handleRemove}>
            Delete
          </button>
          <button className="cancelbutton" onClick={handlecanceldel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deleteaccount;
