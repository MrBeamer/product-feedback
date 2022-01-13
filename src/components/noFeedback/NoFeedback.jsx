import React from "react";
import { Button } from "../";
import "./noFeedback.scss";

import detectiveIcon from "../../assets/suggestions/illustration-empty.svg";

export default function NoFeedback() {
  return (
    <div className="no-feedback">
      <div className="no-feedback__flex-container">
        <img
          className="no-feedback__icon"
          src={detectiveIcon}
          alt="man with magnifying glass"
        ></img>
        <h2 className="no-feedback__title">There is no feedback yet.</h2>
        <p className="no-feedback__text">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>

        <Button backgroundColor="purple" url="/add-feedback">
          + Add Feedback
        </Button>
      </div>
    </div>
  );
}
