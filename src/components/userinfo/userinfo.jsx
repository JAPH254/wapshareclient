import React from "react";
import "./userinfo.css";
import { useSelector } from "react-redux";
function Userinfo() {
  const user = useSelector((store) => store.user.user);
  
    return (
    <div className="U_info">
      <h3>{user.USERNAME}</h3>
      <span>{user.EMAIL}</span>
      <span>{user.PHONE_NUMBER}</span>
      <span>{user.COUNTRY}</span>
      <span>user gender</span>

      <span>user bio</span>
    </div>
  );
}

export default Userinfo;
