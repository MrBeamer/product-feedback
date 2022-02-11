import React, { useState } from "react";
import "./upvoteButton.scss";

export default function UpvoteButton({ feedback, ...rest }) {
  const [votes, setVotes] = useState(0);

  function addVote() {
    feedback.upvotes += 1;
    setVotes(feedback.upvotes) || console.log("Error:" + votes);
  }

  return (
    <div className="upvote" {...rest} onClick={addVote}>
      <i className="fas fa-angle-up upvote__icon"></i>
      <p className="upvote__number">{feedback.upvotes}</p>
    </div>
  );
}
