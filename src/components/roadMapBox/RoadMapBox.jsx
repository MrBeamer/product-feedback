import React from "react";
import "./roadMapBox.scss";

export default function RoadMapBox() {
  return (
    <div className="roadmap">
      <h2 className="roadmap__title">Roadmap</h2>
      <a className="roadmap__link" href="/">
        View
      </a>
      <ul className="roadmap__list">
        <li className="roadmap__item planned">Planned </li>
        <li className="roadmap__item progress">In-Progress</li>
        <li className="roadmap__item live">Live</li>
      </ul>
    </div>
  );
}
