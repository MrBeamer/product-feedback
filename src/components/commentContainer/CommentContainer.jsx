import React from "react";
import "./commentContainer.scss";
import { Heading, CommentList } from "../";

export default function CommentContainer({ feedback }) {
  const comments = feedback.comments?.length;

  return comments !== 0 ? (
    <div className="commentContainer">
      <Heading>{`${comments} ${
        comments > 1 ? "Comments" : "Comment"
      }`}</Heading>
      <CommentList feedback={feedback} />
    </div>
  ) : null;
}
