import React from "react";
import "./feedbackContainer.scss";
import { FeedbackList } from "../";

export default function FeedbackContainer() {
  return (
    <div className="feedback-container">
      <FeedbackList></FeedbackList>
    </div>
  );
}
