import React, { useContext } from "react";
import { FeedbackContext } from "../utility/FeedbackContext";
import { useParams } from "react-router-dom";
import { Feedback } from "../components";

export default function FeedbackView() {
  const { feedbackId } = useParams();
  const context = useContext(FeedbackContext);
  console.log(feedbackId);

  const foundFeedback = context.feedbackList.find(
    (feedback) => feedback.id === Number(feedbackId)
  );
  console.log(Number(feedbackId));

  console.log(foundFeedback);

  return <Feedback feedback={foundFeedback}></Feedback>;
}

{
  /* <div className="feedback">
<UpvoteButton feedback={feedback} />
<div className="feedback__flex-container">
  <h2 className="feedback__title">{feedback.title}</h2>
  <p className="feedback__text">{feedback.detail}</p>
  <Label>{feedback.category}</Label>
</div>
<CommentButton feedback={feedback} />
</div> */
}
