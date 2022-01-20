import React from "react";
import "./feedbackContainer.scss";
import { FeedbackList } from "../";

export default function FeedbackContainer({ onSubmitClick }) {
  return (
    <div className="feedback-container">
      <FeedbackList onSubmitClick={onSubmitClick}></FeedbackList>
    </div>
  );
}
