import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import "./roadmapCard.scss";
import { Label, UpvoteButton, CommentButton } from "../";

export default function RoadmapCard({ feedback }) {
  const classNames = clsx({
    planned: "planned" === feedback.status,
    progress: "in-progress" === feedback.status,
    live: "live" === feedback.status,
  });

  return (
    <div className={`roadmap-card ${classNames}`}>
      <div className="roadmap-card__container">
        <div className={`roadmap-card__dot ${classNames}`}></div>
        <p className="roadmap-card__feedback-status">{feedback.status}</p>
      </div>
      <Link className="roadmap-card__feedback-title" to={`/${feedback.id}`}>
        {feedback.title}
      </Link>
      <p className="roadmap-card__feedback-description">
        {feedback.description}
      </p>
      <Label>{feedback.category}</Label>
      <div className="roadmap-card__user-inputs">
        <UpvoteButton feedback={feedback} />
        <CommentButton feedback={feedback} />
      </div>
    </div>
  );
}
