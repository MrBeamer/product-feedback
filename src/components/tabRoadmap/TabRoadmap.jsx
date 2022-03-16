import React, { useState } from "react";
import { RoadmapList } from "../";
import "./tabRoadmap.scss";

import useRoadmapFilter from "../../utility/useRoadmapFilter.js";

export default function TabRoadmap() {
  const [activeTab, setActiveTab] = useState("planned");
  const { planned, progress, live } = useRoadmapFilter();

  function handleActiveTabClick(event) {
    const clickedTabId = event.currentTarget.id;
    setActiveTab(clickedTabId);
  }

  function showActiveTab() {
    if (activeTab === "planned") {
      return (
        <RoadmapList
          title="Planned"
          subtitle="Ideas prioritized for research"
          feedbackList={planned}
        />
      );
    } else if (activeTab === "in-progress") {
      return (
        <RoadmapList
          title="In-Progress"
          subtitle="Currently being developed"
          feedbackList={progress}
        />
      );
    } else {
      return (
        <RoadmapList
          title="Live "
          subtitle="Released features"
          feedbackList={live}
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
          >{`Planned (${planned.length})`}</li>
          <li
            id="in-progress"
            className={`tab-roadmap__nav-item ${
              activeTab === "in-progress" ? "active--in-progress" : ""
            }`}
            onClick={handleActiveTabClick}
          >
            {`In-Progress (${progress.length})`}
          </li>
          <li
            id="live"
            className={`tab-roadmap__nav-item ${
              activeTab === "live" ? "active--live" : ""
            }`}
            onClick={handleActiveTabClick}
          >{`Live (${live.length})`}</li>
        </ul>
        <div className="tab-roadmap__line"></div>
      </div>

      <div className="tab-roadmap__container">{showActiveTab()}</div>
    </div>
  );
}
