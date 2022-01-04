import React from "react";
import "./upvoteButton.scss";

export default function UpvoteButton() {
  return (
    <div className="upvote">
      <i className="fas fa-angle-up upvote__icon"></i>
      <p className="upvote__number">20</p>
    </div>
  );
}
