import React from "react";
import "./roadMapBox.scss";

export default function RoadMapBox() {
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
          Planned <span className="roadmap__item--quantity">2</span>
        </li>
        <li className="roadmap__item progress">
          In-Progress <span className="roadmap__item--quantity">3</span>
        </li>
        <li className="roadmap__item live">
          Live <span className="roadmap__item--quantity">1</span>
        </li>
      </ul>
    </div>
  );
}
