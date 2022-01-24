import React from "react";
import "./comment.scss";
import userOne from "../../assets/user-images/image-elijah.jpg";
// ./assets/user-images/image-suzanne.jpg
export default function Comment({ comment }) {
  if (comment)
    return (
      <div className="comment">
        <img
          className="comment__avatar"
          // src={comment.user.image}
          src={require(`../../assets/user-images/${comment.user?.image}.jpg`)}
          alt="user icon"
        ></img>
        <div className="comment__user-info">
          <h3 className="comment__name">{comment.user.name}</h3>
          <p className="comment__username">{comment.user.username}</p>
        </div>
        <p className="comment__reply">Reply</p>
        <p className="comment__text">{comment.text}</p>
      </div>
    );
  else {
    return null;
  }
}
