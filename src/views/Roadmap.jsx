import React, { useState, useContext, useEffect } from "react";
import { FeedbackContext } from "../utility/FeedbackContext";
import { RoadmapList, Button, GoBack } from "../components";
export default function Roadmap() {
  const [planned, setPlanned] = useState([]);
  const [progress, setProgress] = useState([]);
  const [live, setLive] = useState([]);

  const context = useContext(FeedbackContext);

  console.log(context.feedbackList);
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
    <>
      <div className="roadmap-bar">
        <GoBack />
        <Button backgroundColor="purple" url={"/add-feedback"}>
          + Add Feedback
        </Button>
      </div>

      <main className="flex-container">
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
      </main>
    </>
  );
}