import React from "react";
import "./comment.scss";
import userOne from "../../assets/user-images/image-elijah.jpg";

export default function Comment({ comment }) {
  if (comment)
    return (
      <div className="comment">
        <img className="comment__avatar" src={comment.avatar} alt="place"></img>
        <div className="comment__user-info">
          <h3 className="comment__fullname">{comment.fullname}</h3>
          <p className="comment__username">{comment.username}</p>
        </div>
        <p className="comment__reply">Reply</p>
        <p className="comment__text">{comment.text}</p>
      </div>
    );
  else {
    return null;
  }
}
