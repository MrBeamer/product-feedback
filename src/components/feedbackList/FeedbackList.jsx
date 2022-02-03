import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { Feedback, NoFeedback, RoadmapCard } from "../";
import { FeedbackContext } from "../../utility/FeedbackContext";
import "./feedbackList.scss";

export default function FeedbackList() {
  const context = useContext(FeedbackContext);
  const isMobile = useMediaQuery({ query: "(max-width: 701px)" });

  return (
    <>
      {context.filteredList.length !== 0 ? (
        context.filteredList.map((item, index) =>
          isMobile ? (
            <RoadmapCard key={index} feedback={item} />
          ) : (
            <Feedback key={index} feedback={item} />
          )
        )
      ) : (
        <NoFeedback />
      )}
    </>
  );
}
// context.feedbackList maybe use that and refactored filteredList
