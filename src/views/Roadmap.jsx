import React from "react";
import { useMediaQuery } from "react-responsive";
import { RoadmapList, Button, GoBack, TabRoadmap } from "../components";
import useRoadmapFilter from "../utility/useRoadmapFilter.js";

export default function Roadmap() {
  const isMobile = useMediaQuery({ query: "(max-width: 701px)" });
  const { planned, progress, live } = useRoadmapFilter();

  return (
    <>
      <main className="roadmap-flex-container">
        <div className="roadmap-bar">
          <div className="roadmap-bar__content">
            <GoBack color="#fff" fColor="#fff" />
            <h2 className="roadmap-bar__title">Roadmap</h2>
          </div>
          <Button backgroundColor="purple" url={"/add-feedback"}>
            + Add Feedback
          </Button>
        </div>

        {isMobile ? (
          <TabRoadmap />
        ) : (
          <div className="roadmap-container">
            <RoadmapList
              title="Planned"
              subtitle="Ideas prioritized for research"
              feedbackList={planned}
            />

            <RoadmapList
              title="In-Progress"
              subtitle="Currently being developed"
              feedbackList={progress}
            />
            <RoadmapList
              title="Live "
              subtitle="Released features"
              feedbackList={live}
            />
          </div>
        )}
      </main>
    </>
  );
}
