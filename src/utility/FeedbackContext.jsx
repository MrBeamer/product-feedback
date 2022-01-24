import React, { createContext, useState, useEffect } from "react";
import data from "../data.json";

console.log(data.productRequests);

const FeedbackContext = createContext();

function FeedbackProvider(props) {
  const [feedbackList, setFeedbackList] = useState([]);

  //render initial list from json file
  useEffect(() => {
    setFeedbackList(data.productRequests);
  }, []);

  // adds user feedback to the initial list
  function addToList(event, feedback, setFeedback) {
    setFeedbackList((prevList) => [feedback, ...prevList]);
    localStorage.setItem("listFeedback", JSON.stringify(feedbackList));
    setFeedback({ ...feedback, title: "", category: "Feature", detail: "" });
    // event.preventDefault(); only for submit
  }

  const value = {
    addToList,
    feedbackList,
  };

  return (
    <FeedbackContext.Provider value={value}>
      {props.children}
    </FeedbackContext.Provider>
  );
}

export { FeedbackContext, FeedbackProvider };
