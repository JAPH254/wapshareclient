import React from "react";
import "./Navbar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RefreshIcon from '@mui/icons-material/Refresh';
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Notifications from "../notifications/notifications";
import { useState } from "react";
import Modal from "react-modal";
import Messanging from "../messanging/messanging";
import { useSelector } from "react-redux";
function Navbar() {
  //description: this is the navbar component
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [messanging, setMessanging] = useState(false);
  const navigate = useNavigate();
  // const user = useSelector((store)=> store.user)
  // console.log(user);
  //handle the home button
  const handlehome = () => {
    navigate("/");
  };
  //handle the messanging button
  const openModal = () => {
    setModalIsOpen(true);
  };
  //handle the messanging button
  const handlemessanging = () => {
    setMessanging(true);
  };
  //handel the modal
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const closemessanging = () => {
    setMessanging(false);
  };
  // function to refresh my entire page
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="nav_left">
        <div className="lefticons">
          <b onClick={handlehome}>W</b>
          <div onClick={handlehome}>
            <HomeOutlinedIcon />
          </div>
          <div className="refresh" onClick={refreshPage}>
            <RefreshIcon />
          </div>
        </div>
        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="search..." />
          <button>Search</button>
        </div>
      </div>
      <div className="nav_right">
        <div className="notif">
          <NotificationsIcon onClick={openModal}>start</NotificationsIcon>
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <Notifications />
            <button onClick={closeModal}>Go back</button>
          </Modal>
        </div>
        <div className="mail">
          <MailOutlineIcon onClick={handlemessanging}></MailOutlineIcon>
          <Modal isOpen={messanging} onRequestClose={closemessanging}>
            <Messanging />
            <button onClick={closemessanging}>Go back</button>
          </Modal>
        </div>

        <div className="pic">
          <img
            src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          {/* <h1>{user?.USERNAME}</h1> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
