import React from "react";
import "./posts.css";
import Comments from "../comments/comments";
import Likes from "../likes/likes";
import Share from "../share/share";
import { useNavigate } from "react-router-dom";
function Posts(props) {
    const navigate = useNavigate();
    const handlePost = () => {
        navigate("/profile/:id");
    };
  return (
    <>
      <div className="Posts">
        <div className="postheaders" onClick={handlePost}>
          <img
            src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="username1time">
            <span>Joel Kings</span>
            <p>Online</p>
          </div>
        </div>
        <div className="postcontent">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            sunt quam architecto molestias. Fugiat aliquam enim id, laboriosam
            aspernatur molestias? Molestiae officia tenetur nobis pariatur
            laboriosam nulla modi nam inventore.
          </p>
          <img
            src="https://images.pexels.com/photos/1125850/pexels-photo-1125850.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="postfooter">
          <div className="like">
            <Likes />
          </div>
          <div className="comment">
            <Comments />
          </div>
          <div className="share">
            <Share />
          </div>
        </div>
      </div>
    </>
  );
}

export default Posts;
