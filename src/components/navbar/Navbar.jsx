import React, { useEffect, useRef } from "react";
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
import axios from "axios";
import { ApiDomain } from "../../assets/utils";
function Navbar() {
  //description: this is the navbar component
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [messanging, setMessanging] = useState(false);
  const navigate = useNavigate();
  const searchTerm = useRef("");
  const user = useSelector((store)=> store.user.user)
  // console.log(user);
  //handle the home button
  const handlehome = () => {
    navigate("/dashboard");
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
  const handleChange = (e) => {
    searchTerm.current = e.target.value;
    console.log(searchTerm.current);
  }
  useEffect(() => {
    const searchPosts = async () => {
      try {
        const res = await axios.get(`${ApiDomain}/posts/search?CONTENT=${searchTerm.current}`);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    searchPosts();
  }, [searchTerm]);
  const handleSubmit = (e) => {
    e.preventDefault();
  }


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
        <form className="search" onSubmit={handleSubmit}>
          <SearchIcon />
          <input type="search" ref={searchTerm} onChange={handleChange} placeholder="search..." />
          <button type="submit">Search</button>
        </form>
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
            //fetch image from the database
            src={user?.PROFILE_PIC}
            alt=""
          />
          <h4>{user?.USERNAME}</h4>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
