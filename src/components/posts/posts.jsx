import React, { useEffect, useState } from "react";
import "./posts.css";
import Comments from "../comments/comments";
import Likes from "../likes/likes";
import Share from "../share/share";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/reducerAPI";
import Post from "./post";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const user = useSelector((store) => store.user.user);
  const posts = useSelector((store) => store.posts.posts);
  const navigate = useNavigate();
  const handlePost = () => {
    navigate("/profile/:id");
  };
  //fetch posts from the database using redux
  const dispatch = useDispatch();
  const getPosts = async () => {
    try {
      setLoading(true);
      await fetchPosts(user, dispatch);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // alert(error.message)
      setError(error.message);
    }
  };
  useEffect(() => {
    getPosts();
    fetchPosts(user, dispatch);
    // console.log(posts);
  }, []);

  return (
    <>
      <div className="Posts">
        {/* <div className="postheaders" onClick={handlePost}>
          <img
            src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          /> */}
          {/* <div className="username1time">
            <span>Joel Kings</span>
            <p>Online</p>
          </div> */}
        {/* </div> */}
        <div className="postcontent">
          {/* LOADING FOR DATA */}
          {loading && <h1>Loading...</h1>}
          {/* DISPLAY ERROR INCASE THEIR IS ANY */}
          {error && <h1>{error}</h1>}
          {/* FETCH POSTS  */}
          {posts.map((post) => (
            <Post key={post.POSTID} post={post} />
          ))}
          
        </div>
        {/* <div className="postfooter">
          <div className="like">
            <Likes />
          </div>
          <div className="comment">
            <Comments />
          </div>
          <div className="share">
            <Share />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Posts;
