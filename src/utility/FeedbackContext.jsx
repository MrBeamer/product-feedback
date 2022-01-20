import React, { createContext, useState } from "react";

const FeedbackContext = createContext();

function FeedbackProvider(props) {
  const [feedbackList, setFeedbackList] = useState([]);

  function addToList(event, feedback, setFeedback) {
    console.log(feedback);
    setFeedbackList((prevList) => [...prevList, feedback]);
    localStorage.setItem("listFeedback", JSON.stringify(feedbackList));
    setFeedback({ ...feedback, title: "", category: "Feature", detail: "" });
    event.preventDefault();
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
