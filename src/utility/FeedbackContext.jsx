import React, { createContext, useState, useEffect } from "react";
import data from "../data.json";

const FeedbackContext = createContext();

function FeedbackProvider(props) {
  const [feedbackList, setFeedbackList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  //render initial list from json file
  useEffect(() => {
    setFeedbackList(data.productRequests);
  }, []);

  useEffect(() => {
    setFilteredList(feedbackList);
  }, [feedbackList]);

  // adds user feedback to the initial list
  function addToList(event, feedback, setFeedback) {
    setFeedbackList((prevList) => [feedback, ...prevList]);
    localStorage.setItem("listFeedback", JSON.stringify(feedbackList));
    setFeedback({ ...feedback, title: "", category: "Feature", detail: "" });
    // event.preventDefault(); only for submit
  }

  //finds in the initial list - the matching feedback and updates it with the passed in value
  function updateFeedback(feedbackUpdate) {
    console.log(feedbackUpdate);
    console.log(feedbackUpdate.id);

    const indexOfFeedback = feedbackList.findIndex(
      (feedback) => feedback.id === feedbackUpdate.id
    );
    feedbackList[indexOfFeedback] = feedbackUpdate;
  }

  function deleteFeedback(id) {
    const indexOfFeedback = feedbackList.findIndex(
      (feedback) => feedback.id === Number(id)
    );
    feedbackList.splice(indexOfFeedback, 1);
    console.log(`Delete List: ${feedbackList.length} of 12`);
  }

  // filter initial list by category
  function filterByCategory(event) {
    let category = event.currentTarget.id;
    // category.push(event.currentTarget.id);

    // eslint-disable-next-line array-callback-return
    const test = feedbackList.filter((feedback) => {
      if (feedback.category === category) {
        return feedback;
      } else if (category === "All") {
        return feedbackList;
      }
    });

    setFilteredList(test);
  }
  console.log(filteredList);

  console.log(feedbackList);

  const value = {
    addToList,
    feedbackList,
    updateFeedback,
    deleteFeedback,
    filterByCategory,
    filteredList,
  };

  return (
    <FeedbackContext.Provider value={value}>
      {props.children}
    </FeedbackContext.Provider>
  );
}

export { FeedbackContext, FeedbackProvider };
