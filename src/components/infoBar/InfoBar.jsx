import React, { useContext } from "react";
import "./infoBar.scss";
import { Button, SortSwitch } from "../";
import { FeedbackContext } from "../../utility/FeedbackContext";
import iconSuggestions from "../../assets/suggestions/icon-suggestions.svg";

export default function InfoBar() {
  const context = useContext(FeedbackContext);

  return (
    <div className="info-bar">
      <div className="info-bar__container">
        <div className="info-bar__suggestion">
          <img
            className="info-bar__icon"
            src={iconSuggestions}
            alt="icon suggestions"
          ></img>
          <h2 className="info-bar__title">{`${
            context.feedbackList.filter(
              (feedback) => feedback.status === "suggestion"
            ).length
          } Suggestions`}</h2>
        </div>

        <p className="info-bar__text">Sort by : </p>
        <SortSwitch
          options={[
            { value: "mostUpvotes", text: "Most Upvotes" },
            { value: "leastUpvotes", text: "Least Upvotes" },
            { value: "mostComments", text: "Most Comments" },
            { value: "leastComments", text: "Least Comments" },
          ]}
        />
      </div>
      <Button backgroundColor="purple" url={"/add-feedback"}>
        + Add Feedback
      </Button>
    </div>
  );
}
