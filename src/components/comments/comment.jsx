import React from "react";

function Comment({ postid, c, user }) {
  const postComments = c.filter((c) => c.POSTID === postid);
  console.log(postComments);
  return (
    <div>
      {postComments.map((com) => (
        <SinglePostComment com={com} user={user} />
      ))}
    </div>
  );
}

export default Comment;
const SinglePostComment = ({ com, user }) => {
  return (
    <div>
      <span>{com.CONTENT}</span>
      <p>{user.USERNAME}</p>
    </div>
  );
};
