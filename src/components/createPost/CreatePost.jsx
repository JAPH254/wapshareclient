import React from "react";
import "./CreatePost.css";
import { useSelector } from "react-redux";
import PermMediaIcon from '@mui/icons-material/PermMedia';

function CreatePost(props) {
  const user = useSelector((store) => store.user.user);
  return (
    <div className="CreatePost">
      <div className="postcreator">
        <img src={user.PROFILE_PIC} alt="" />
        <textarea placeholder="What's on your mind?"></textarea>
        <button>Post</button>
      </div>
      <div className="fetchimage">
        <PermMediaIcon />
      </div>
    </div>
  );
}

export default CreatePost;
