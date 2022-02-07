import React, { useState, useContext } from "react";
import { FeedbackContext } from "../../utility/FeedbackContext";
import clsx from "clsx";
import { RoadmapList } from "../";
import "./tabRoadmap.scss";

export default function TabRoadmap() {
  const context = useContext(FeedbackContext);
  const [activeTab, setActiveTab] = useState("planned");
  function handleActiveTabClick(event) {
    const clickedTabId = event.currentTarget.id;
    console.log(clickedTabId);
    setActiveTab(clickedTabId);
  }

  // const classNames = clsx({
  //   "tab-roadmap__nav-item": true,
  //   "btn--purple": backgroundColor === "purple",
  //   "btn--darkblue": backgroundColor === "darkblue",
  //   "btn--blue": backgroundColor === "blue",
  //   "btn--red": backgroundColor === "red",
  //   "btn--medium": size === "medium",
  //   "btn--small": size === "small",
  // });

  function showActiveTab() {
    if (activeTab === "planned") {
      return (
        <RoadmapList
          title="Planned"
          subtitle="Ideas prioritized for research"
          feedbackList={context.planned}
        />
      );
    } else if (activeTab === "in-progress") {
      return (
        <RoadmapList
          title="In-Progress"
          subtitle="Currently being developed"
          feedbackList={context.progress}
        />
      );
    } else {
      return (
        <RoadmapList
          title="Live "
          subtitle="Released features"
          feedbackList={context.live}
        />
      );
    }
  }

  return (
    <div className="tab-roadmap">
      <div className="tab-roadmap__nav">
        <ul className="tab-roadmap__nav-menu">
          <li
            id="planned"
            className={`tab-roadmap__nav-item ${
              activeTab === "planned" ? "active--planned" : ""
            }`}
            onClick={handleActiveTabClick}
          >{`Planned (${context.planned.length})`}</li>
          <li
            id="in-progress"
            className={`tab-roadmap__nav-item ${
              activeTab === "in-progress" ? "active--in-progress" : ""
            }`}
            onClick={handleActiveTabClick}
          >
            {`In-Progress (${context.progress.length})`}
          </li>
          <li
            id="live"
            className={`tab-roadmap__nav-item ${
              activeTab === "live" ? "active--live" : ""
            }`}
            onClick={handleActiveTabClick}
          >{`Live (${context.live.length})`}</li>
        </ul>
        <div className="tab-roadmap__line"></div>
      </div>

      <div className="tab-roadmap__container">{showActiveTab()}</div>
    </div>
  );
}
