import React, { useEffect, useState } from "react";
import Likes from "../likes/likes";
import Comments from "../comments/comments";
import { useSelector } from "react-redux";
import Share from "../share/share";
import { useParams } from "react-router-dom";
import axios from "axios";

function SinglePost() {
    const {id} = useParams()
    const [post, setPost]= useState(null)
  const comments = useSelector((store)=> store.posts.comments)
  const getPost= async ()=>{
    const res = await axios.get(`${ApiDomain}/posts/${id}`)
    const data =await res.data
    setPost(data)
    console.log(data);
  }
  useEffect(()=>{
    getPost()
  },[])
  return (
    <div>
      <div>
        <h1>Heading post</h1>
        <h3>{post.POSTDATE}</h3>
      </div>

      <h2>{post?.CONTENT}</h2>
      <img src={post.POSTIMAGE} alt={post.CONTENT} />
      <div className="postfooter">
        <div className="like">
          <Likes />
        </div>
        <div className="comment">
          {comments.map((comment)=>(
            <Comments  comment={comment}/>
          ))}
        </div>
        <div className="share">
          <Share />
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
