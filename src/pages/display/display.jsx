import React from "react";
import "./display.css";
import Myprofile from "../../components/rightbar/profile/myprofile";
import Settings from "../../components/Settings/settings";
import Logout from "../logout/logout";


function Display(props) {
  return (
    <div>
      <div className="display">
        <div className="myprofile">
          <Myprofile />
        </div>
        <div className="settings">
          <Settings />
        </div>
        <div className="logout">
          <Logout />
        </div>
      </div>
    </div>
  );
}

export default Display;
