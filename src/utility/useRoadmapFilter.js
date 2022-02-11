import { useEffect, useState, useContext } from "react";
import { FeedbackContext } from "./FeedbackContext";

export default function useRoadmapFilter() {
  const [planned, setPlanned] = useState([]);
  const [progress, setProgress] = useState([]);
  const [live, setLive] = useState([]);

  const context = useContext(FeedbackContext);

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

  return { planned, progress, live };
}
