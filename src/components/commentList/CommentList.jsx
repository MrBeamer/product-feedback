import React from "react";
import { Comment } from "../";
import "./commentList.scss";

export default function CommentList({ feedback }) {
  return (
    <div>
      {feedback.comments?.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}
