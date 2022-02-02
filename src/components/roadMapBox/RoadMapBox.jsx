import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./roadMapBox.scss";
import { FeedbackContext } from "../../utility/FeedbackContext";

export default function RoadMapBox() {
  const [planned, setPlanned] = useState([]);
  const [progress, setProgress] = useState([]);
  const [live, setLive] = useState([]);

  const context = useContext(FeedbackContext);

  console.log(planned);
  console.log(progress);
  console.log(live);

  useEffect(() => {
    const plannedList = context.feedbackList.filter(
      (feedback) => feedback.status === "planned"
    );

    const progressList = context.feedbackList.filter(
      (feedback) => feedback.status === "in-progress"
    );

    const liveList = context.feedbackList.filter(
      (feedback) => feedback.status === "live"
    );

    setPlanned(plannedList);
    setProgress(progressList);
    setLive(liveList);
  }, [context.feedbackList]);

  return (
    <div className="roadmap">
      <div className="roadmap__flex-container">
        <h2 className="roadmap__title">Roadmap</h2>
        <Link className="roadmap__link" to="/roadmap">
          View
        </Link>
      </div>
      <ul className="roadmap__list">
        <li className="roadmap__item planned">
          Planned{" "}
          <span className="roadmap__item--quantity">{planned.length}</span>
        </li>
        <li className="roadmap__item progress">
          In-Progress{" "}
          <span className="roadmap__item--quantity">{progress.length}</span>
        </li>
        <li className="roadmap__item live">
          Live <span className="roadmap__item--quantity">{live.length}</span>
        </li>
      </ul>
    </div>
  );
}
