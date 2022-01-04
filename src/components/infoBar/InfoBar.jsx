import React from "react";
import "./infoBar.scss";
import { Button } from "../";
import { SortSwitch } from "../";

import iconSuggestions from "../../assets/suggestions/icon-suggestions.svg";

export default function InfoBar() {
  return (
    <div className="info-bar">
      <div className="info-bar__container">
        <img
          className="info-bar__icon"
          src={iconSuggestions}
          alt="icon suggestions"
        ></img>
        <h2 className="info-bar__title">6 Suggestions</h2>
        <SortSwitch />
      </div>
      <Button backgroundColor="purple">+ Add Feedback</Button>
    </div>
  );
}
