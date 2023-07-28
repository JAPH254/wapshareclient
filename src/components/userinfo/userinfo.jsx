import React from "react";
import "./userinfo.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Userinfo() {
  const user = useSelector((store) => store.user.user);

  return (
    <div className="U_info">
      <h3>{user?.USERNAME}</h3>
      <span>{user?.EMAIL}</span>
      <span>{user?.PHONE_NUMBER}</span>
      <Link>
        {" "}
        <span>{user?.WEBSITE}</span>
      </Link>

      <span>{user?.COUNTRY}</span>
      <span>user bio</span>
    </div>
  );
}

export default Userinfo;
