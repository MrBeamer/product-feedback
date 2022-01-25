import React, { useContext } from "react";
import { Label } from "../";
import "./categoryBox.scss";
import { FeedbackContext } from "../../utility/FeedbackContext";

export default function CategoryBox() {
  const context = useContext(FeedbackContext);

  return (
    <div className="category-box">
      <Label id="All" onClick={(event) => context.filterByCategory(event)}>
        All
      </Label>
      <Label id="UX" onClick={(event) => context.filterByCategory(event)}>
        UX
      </Label>
      <Label id="UI" onClick={(event) => context.filterByCategory(event)}>
        UI
      </Label>
      <Label
        id="Enhancement"
        onClick={(event) => context.filterByCategory(event)}
      >
        Enhancement
      </Label>
      <Label id="Bug" onClick={(event) => context.filterByCategory(event)}>
        Bug
      </Label>
      <Label id="Feature" onClick={(event) => context.filterByCategory(event)}>
        Feature
      </Label>
    </div>
  );
}
