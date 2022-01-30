import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./roadMapBox.scss";
import { FeedbackContext } from "../../utility/FeedbackContext";

export default function RoadMapBox() {
  const [planned, setPlanned] = useState(0);
  const [inProgress, setInProgress] = useState(0);
  const [live, setLive] = useState(0);

  const context = useContext(FeedbackContext);

  useEffect(() => {
    context.feedbackList.forEach((feedback) => {
      if (feedback.status === "planned") {
        setPlanned((prevState) => prevState + 1);
      } else if (feedback.status === "in-progress") {
        setInProgress((prevState) => prevState + 1);
      } else if (feedback.status === "live") {
        setLive((prevState) => prevState + 1);
      }
    });
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
          Planned <span className="roadmap__item--quantity">{planned}</span>
        </li>
        <li className="roadmap__item progress">
          In-Progress{" "}
          <span className="roadmap__item--quantity">{inProgress}</span>
        </li>
        <li className="roadmap__item live">
          Live <span className="roadmap__item--quantity">{live}</span>
        </li>
      </ul>
    </div>
  );
}
