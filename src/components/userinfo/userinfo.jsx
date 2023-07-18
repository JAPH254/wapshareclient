import React from "react";
import "./userinfo.css";
import { useSelector } from "react-redux";
function Userinfo() {
  const user = useSelector((store) => store.user.user);
  console.log(user);
    return (
    <div className="U_info">
      <h3>{user.USERNAME}</h3>
      <span>user email</span>
      <span>user phone</span>
      <span>user location</span>
      <span>user gender</span>

      <span>user bio</span>
    </div>
  );
}

export default Userinfo;
