import React from "react";
import "./posts.css";
import { Link } from "react-router-dom";
import Likes from "../likes/likes";
import Comments from "../comments/comments";
import Share from "../share/share";
import { useSelector } from "react-redux";
import SinglePost from "./SinglePost";
import Comment from "../comments/comment";
import { ApiDomain } from "../../assets/utils";

function Post({ post }) {
  const comment = useSelector((store) => store.posts.comments);
  const user = useSelector((store) => store.user.user);

  // console.log(posts);
  return (
    <div className="post">
      <div className="posthead">
        <img src={user.PROFILE_PIC} alt="image" />
        <h1>{post.POSTMAKER}</h1>
      </div>
      <div className="date">
        <h3>{post.POSTDATE}</h3>
      </div>
      {/* <Link
          to={`/posts/${post.POSTID}`}
          style={{
            display: "flex",
            width: "100%",
            margin: "0 auto",
            flexDirection: "column",
          }}
        ></Link> */}
      <div className="postcenter">
        <p>{post.CONTENT}</p>
        <img src={`${ApiDomain}/upload/${post.POSTIMAGE}`} alt="post image" />
      </div>
      <div className="postfoot">
        <Likes/>
        <Comment postid={post.POSTID} c={comment} user={user} />
        <Share/>
      </div>
    </div>
  );
}

export default Post;
