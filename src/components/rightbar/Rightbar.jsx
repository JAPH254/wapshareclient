import React from "react";
import { useState } from "react";
import "./Rightbar.css";
import Display from "../../pages/display/display";
import ArrowDropDownCircleOutlinedIcon from "@mui/icons-material/ArrowDropDownCircleOutlined";
import Userinfo from "../userinfo/userinfo";
import About from "../about/about";
function Rightbar() {
  const [display, setDisplay] = useState(false);
  return (
    <div className="rightbar">
      <div className="userinfo">
        <div className="aligned">
          <div onClick={() => setDisplay(!display)} className="onclick">
            <img
              src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
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
