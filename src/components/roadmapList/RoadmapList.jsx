import React from "react";
import "./roadmapList.scss";
import { RoadmapCard, Heading } from "../";

export default function RoadmapList(props) {
  const { title, subtitle, feedbackList } = props;
  return (
    <div className="roadmap-list">
      <Heading>{`${title} (${feedbackList.length})`}</Heading>
      <p className="roadmap-list__subtitle text--common">{subtitle}</p>

      {feedbackList.map((feedback, index) => {
        return <RoadmapCard key={index} feedback={feedback} />;
      })}
    </div>
  );
}
