import React from "react";
import { Link } from "react-router-dom";
import "./commentButton.scss";
import iconComments from "../../assets/shared/icon-comments.svg";

export default function CommentButton({ feedback }) {
  console.log(feedback);
  return (
    <Link to={`/${feedback.id}`} className="comment-btn">
      <img
        className="comment-btn__icon"
        src={iconComments}
        alt="icon comments"
      />
      <p className="comment-btn__number">{feedback.comments?.length ?? 0}</p>
    </Link>
  );
}
