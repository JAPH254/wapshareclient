import React from "react";
import "./messanging.css";
import { useNavigate } from "react-router-dom";

function Messanging(props) {
    const navigate = useNavigate();
    const handleback = () => {
        navigate("/");
    };
  return (
    <div className="messanging">
      <div className="heading">
        <h3>chatting with @Username</h3>
        <span>time</span>
      </div>
      <div className="texting">
        <input type="text-area" placeholder="write a message" />
      </div>
      <div className="foot">
        <button onClick={handleback}>Back</button>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Messanging;
