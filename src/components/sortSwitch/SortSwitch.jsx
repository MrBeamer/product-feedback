import React from "react";
import "./sortSwitch.scss";

export default function SortSwitch() {
  return (
    <div className="sort-switch">
      <select
        className="sort-switch__select"
        defaultValue="Most Upvotes"
        aria-label="filter upvotes and comments"
      >
        <option value="">Most Upvotes</option>
        <option value="">Least Upvotes</option>
        <option value="">Most Comments</option>
        <option value="">Least Comments</option>
      </select>
    </div>
  );
}
