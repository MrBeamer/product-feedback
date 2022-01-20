import React, { useState } from "react";
import "./upvoteButton.scss";

export default function UpvoteButton({ feedback }) {
  const [votes, setVotes] = useState(0);

  function addVote() {
    feedback.upvotes += 1;
    setVotes(feedback.upvotes);
  }

  return (
    <div className="upvote" onClick={addVote}>
      <i className="fas fa-angle-up upvote__icon"></i>
      <p className="upvote__number">{votes}</p>
    </div>
  );
}
