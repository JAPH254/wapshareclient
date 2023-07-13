import React from "react";
import "./about.css";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link as LINK } from "react-router-dom";

function About(props) {
  return (
    <div className="about">
      <div className="media">
        <h2>Get intouch with Us</h2>
        <div className="platforms">
          <a href="http://facebook.com">
            <FacebookTwoToneIcon />
          </a>
          <a href="http://instagram.com">
            <InstagramIcon />
          </a>
          <a href="http://twitter.com">
            <TwitterIcon />
          </a>
          <a href="http://linkedIn.com">
            <LinkedInIcon />
          </a>
          <a href="http://pinterest.com">
            <PinterestIcon />
          </a>
        </div>
      </div>

      <div className="know">
        <h2>Know More About Us</h2>
       <LINK to="/about"> <button>wapshare</button></LINK>
      </div>
    </div>
  );
}

export default About;
