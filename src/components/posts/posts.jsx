import React from "react";
import "./posts.css";
import Comments from "../comments/comments";
import Likes from "../likes/likes";
import Share from "../share/share";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../../store/reducerAPI";
import { useEffect } from "react";
function Posts() {
  const navigate = useNavigate();
  const handlePost = () => {
    navigate("/profile/:id");
  };
  //fetch posts froom the database using redux
  const dispatch = useDispatch();
  const postlist = () => {
    const res = fetchPosts;
  };
  useEffect(() => {
    postlist();
  }, []);
  console.log();

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
          {/* map the fetched posts here */}
          {/* <ul>
            {posts.map((post) => (
              <li key={post._id}>
                <p>{post.CONTENT}</p>
              </li>
            ))}
          </ul> */}
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
