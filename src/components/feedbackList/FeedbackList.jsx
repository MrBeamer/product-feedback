import React from "react";
import "./feedbackList.scss";
import { Feedback, NoFeedback } from "../";

const items = true;

export default function FeedbackList() {
  return items ? <Feedback /> : <NoFeedback />;
}
