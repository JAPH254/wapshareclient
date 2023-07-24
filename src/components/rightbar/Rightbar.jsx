import React from "react";
import { useState } from "react";
import "./Rightbar.css";
import Display from "../../pages/display/display";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import Userinfo from "../userinfo/userinfo";
import About from "../about/about";
import { useSelector } from "react-redux";
function Rightbar() {
  const user = useSelector((store) => store.user.user);
  const [display, setDisplay] = useState(false);
  return (
    <div className="rightbar">
      <div className="userinfo">
        <div className="aligned">
          <div onClick={() => setDisplay(!display)} className="onclick">
            <img
              src={user.PROFILE_PIC}
              alt="profile"
            />

            <>
              <ArrowDropDownCircleOutlinedIcon />
            </>
          </div>
          {!display && (
            <div className="details">
              <Userinfo />
            </div>
          )}
        </div>

        {display && (
          <div className="dropdownlist">
            <Display />
          </div>
        )}
      </div>
      <About />
    </div>
  );
}

export default Rightbar;
