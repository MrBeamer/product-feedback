import React, { useContext } from "react";
import { FeedbackContext } from "../../utility/FeedbackContext";
import "./sortSwitch.scss";

export default function SortSwitch({ options }) {
  const context = useContext(FeedbackContext);

  return (
    <div className="sort">
      <select
        className="sort__select"
        // takes not a single value instead it takes an object
        defaultValue={{ label: "Select Dept", value: "mostUpvotes" }}
        aria-label="filter upvotes and comments"
        onChange={(event) => context.sortBy(event)}
      >
        {options.map((option, index) => (
          <option key={index} className="sort__option" value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}
