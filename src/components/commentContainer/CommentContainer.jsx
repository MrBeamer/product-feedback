import React from "react";
import "./commentContainer.scss";
import { Heading, CommentList } from "../";

export default function CommentContainer({ feedback }) {
  console.log(feedback?.comments);
  return feedback.comments?.length !== 0 ? (
    <div className="commentContainer">
      <Heading>4 Comments</Heading>
      <CommentList feedback={feedback} />
    </div>
  ) : null;
}
