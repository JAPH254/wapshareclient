import React from "react";
import "./Navbar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav_left">
        <div className="lefticons">
        <b>W</b>
        <HomeOutlinedIcon />
        <GridViewOutlinedIcon />
        </div>
        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="search..." />
          <button>Search</button>
        </div>
      </div>
      <div className="nav_right">
        <NotificationsIcon />
        <MailOutlineIcon />
        <div className="pic">
            <img src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
