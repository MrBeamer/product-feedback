import React from "react";
import { Link } from "react-router-dom";
import "./roadMapBox.scss";
import useRoadmapFilter from "../../utility/useRoadmapFilter.js";

export default function RoadMapBox() {
  const { planned, progress, live } = useRoadmapFilter();

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
