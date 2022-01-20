import React, { useState, useContext } from "react";
import "./roadMapBox.scss";
import { FeedbackContext } from "../../utility/FeedbackContext";
import { useEffect } from "react/cjs/react.development";

export default function RoadMapBox() {
  const [planned, setPlanned] = useState(0);
  const [inProgress, setInProgress] = useState(0);
  const [live, setLive] = useState(0);

  const context = useContext(FeedbackContext);

  console.log(context.feedbackList);

  useEffect(() => {
    context.feedbackList.forEach((feedback) => {
      if (feedback.status === "planned") {
        setPlanned((prevState) => prevState + 1);
      } else if (feedback.status === "in-progress") {
        setInProgress((prevState) => prevState + 1);
      }
    });
  }, [context.feedbackList]);

  return (
    <div className="roadmap">
      <div className="roadmap__flex-container">
        <h2 className="roadmap__title">Roadmap</h2>
        <a className="roadmap__link" href="/">
          View
        </a>
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
