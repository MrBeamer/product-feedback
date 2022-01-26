import React from "react";
import "./sortSwitch.scss";

export default function SortSwitch({ options }) {
  return (
    <div className="sort">
      <select
        className="sort__select"
        defaultValue="Most Upvotes"
        aria-label="filter upvotes and comments"
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
