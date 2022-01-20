import React, { useContext } from "react";
import "./feedbackList.scss";
import { Feedback, NoFeedback } from "../";
import { FeedbackContext } from "../../utility/FeedbackContext";

export default function FeedbackList() {
  const context = useContext(FeedbackContext);

  return (
    <>
      {context.feedbackList.length !== 0 ? (
        context.feedbackList.map((item, index) => (
          <Feedback key={index} feedback={item} />
        ))
      ) : (
        <NoFeedback />
      )}
    </>
  );
}
