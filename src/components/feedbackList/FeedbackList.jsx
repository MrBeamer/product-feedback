import React, { useContext } from "react";
import "./feedbackList.scss";
import { Feedback, NoFeedback } from "../";
import { FeedbackContext } from "../../utility/FeedbackContext";

export default function FeedbackList() {
  const context = useContext(FeedbackContext);
  return (
    <>
      {context.filteredList.length !== 0 ? (
        context.filteredList.map((item, index) => (
          <Feedback key={index} feedback={item} />
        ))
      ) : (
        <NoFeedback />
      )}
    </>
  );
}
// context.feedbackList maybe use that and refactored filteredList
