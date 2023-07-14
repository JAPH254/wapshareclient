import React from "react";
import { useState } from "react";
import "./comments.css";
import CommentIcon from '@mui/icons-material/Comment';
function Comments(props) {
  const [comment, setComment] = useState("false");
  // hide and display the comments input field when the user clicks on the comments icon

  return (
    <div className="comments">
      <div onClick={() => setComment(!comment)} className="comm">
        <CommentIcon />
        <h3>comments</h3>
      </div>
      {!comment && (
        <div className="commentsfoot">
          {/* input a text area */}
          <input type="text-area" placeholder="write a comment" />
        </div>
      )}
    </div>
  );
}

export default Comments;
