import React from "react";
import "./userinfo.css";
function Userinfo(props) {
  return (
    <div className="U_info">
      <h3>Username</h3>
      <span>user email</span>
      <span>user phone</span>
      <span>user location</span>
      <span>user gender</span>

      <span>user bio</span>
    </div>
  );
}

export default Userinfo;
