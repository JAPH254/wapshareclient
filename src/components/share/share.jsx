import React from "react";
import { Link } from "react-router-dom";
import ShareIcon from "@mui/icons-material/Share";
import "./share.css";

function Share(props) {
  return (
    <div className="share">
      <div className="p">
        <Link>
          <h3>share</h3>
        </Link>
      </div>
      <div>
        <ShareIcon />
      </div>
    </div>
  );
}

export default Share;
