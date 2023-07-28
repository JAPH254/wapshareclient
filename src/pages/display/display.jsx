import React from "react";
import "./display.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import Myprofile from "../../components/rightbar/profile/myprofile";
// import Settings from "../../components/Settings/settings";
import SettingsIcon from '@mui/icons-material/Settings';
import Logout from "../logout/logout";
import { Link } from "react-router-dom";


function Display(props) {
  return (
    <div>
      <div className="display">
        <div className="myprofile">
          {/* <Myprofile /> */}
          <AccountCircleIcon />
          <Link to="/dashboard/myprofile" style={{textDecoration:'none'}}>My profile</Link>
        </div>
        <div className="settings">
          {/* <Settings /> */}
          <SettingsIcon/>
          <Link to="/dashboard/settings" style={{textDecoration:'none'}}>Settings</Link>
        </div>
        <div className="logout">
          <Logout />
        </div>
      </div>
    </div>
  );
}

export default Display;
