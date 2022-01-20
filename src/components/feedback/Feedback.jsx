import React from "react";
import "./feedback.scss";
import { Label, UpvoteButton, CommentButton } from "../";

export default function Feedback({ feedback }) {
  return (
    <div className="feedback">
      <UpvoteButton feedback={feedback} />
      <div className="feedback__flex-container">
        <h2 className="feedback__title">{feedback.title}</h2>
        <p className="feedback__text">{feedback.detail}</p>
        <Label>{feedback.category}</Label>
      </div>
      <CommentButton feedback={feedback} />
    </div>
  );
}
