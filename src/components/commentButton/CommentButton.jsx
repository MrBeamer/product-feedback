import React from "react";
import "./commentButton.scss";
import iconComments from "../../assets/shared/icon-comments.svg";

export default function CommentButton() {
  return (
    <div className="comment">
      <img className="comment_icon" src={iconComments} alt="icon comments" />
      <p className="comment__number">2</p>
    </div>
  );
}
