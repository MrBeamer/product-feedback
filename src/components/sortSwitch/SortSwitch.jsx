import React from "react";
import "./sortSwitch.scss";

export default function SortSwitch({ options }) {
  return (
    <div className="dropdown">
      <select
        className="dropdown__select"
        defaultValue="Most Upvotes"
        aria-label="filter upvotes and comments"
      >
        {options.map((option, index) => (
          <option key={index} className="dropdown__option" value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}
