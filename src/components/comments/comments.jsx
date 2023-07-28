import React, { useEffect } from "react";
import { useState } from "react";
import "./comments.css";
import Comment from "./comment";
import CommentIcon from "@mui/icons-material/Comment";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../../store/reducerAPI";
import SingleComment from "./SingleComment";
function Comments({postid}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
 
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const getComments = async () => {
    try {
      setLoading(true);
      await fetchComments(dispatch);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert(error.message)
      setError(error.message);
    }
  };

  useEffect(() => {
    getComments();
    console.log(comment);
  },[]);

  const [toggleComment, setToggleComment] = useState(false);
  // hide and display the comments input field when the user clicks on the comments icon
  return (
    <div className="comments">
      <div onClick={() => setToggleComment(!toggleComment)} className="comm">
        <CommentIcon />
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        <div>
          {postComments.map((c)=>(
           <Comment c={c} user={user}/>
          ))}
         {/* <SingleComment comment={comment} /> */}
        </div>
      </div>
      {!toggleComment && (
        <div className="commentsfoot">
          {/* input a text area */}
          <input type="text-area" placeholder="write a comment" />
        </div>
      )}
    </div>
  );
}

export default Comments;
