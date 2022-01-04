import React from "react";
import "./feedback.scss";
import { Label, UpvoteButton, CommentButton } from "../";

export default function Feedback() {
  return (
    <div className="feedback">
      <UpvoteButton />
      <div className="feedback__flex-container">
        <h2 className="feedback__title">Add tags for solutions</h2>
        <p className="feedback__text">
          Easier to search for solutions based on a specific stack. Easier to
          search for solutions based on a specific stack.
        </p>
        <Label>Enhancement</Label>
      </div>
      <CommentButton />
    </div>
  );
}
//new method flex box justify between and first element align-self start
//second element align self center and third element same
