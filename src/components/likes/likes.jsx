import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./likes.css";
import { useState } from "react";

function Likes(props) {
  const [likes, setLikes] = useState(0);
  const handleLikes = () => {
    if (likes > 0) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
  };
  return (
    <div className="likes">
      <div className="likeicons" onClick={handleLikes}>
        {likes > 0 ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </div>
      <div className="span">
        <span>
          {likes} {likes > 1 ? "likes" : "like"}
        </span>
      </div>
    </div>
  );
}

export default Likes;
