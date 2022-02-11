// import { set } from "mongoose";
import React, { createContext, useState, useEffect } from "react";
import data from "../data.json";

const FeedbackContext = createContext();

function FeedbackProvider(props) {
  const [feedbackList, setFeedbackList] = useState(data.productRequests);
  const [filteredList, setFilteredList] = useState(feedbackList);

  // const [test, setTest] = useState(() => localStorage.getItem("listFeedback"));

  // let list = localStorage.getItem("listFeedback");
  // list = JSON.parse(list);
  // console.log(list);

  // console.log(JSON.parse(test));

  useEffect(() => {
    setFilteredList(feedbackList);
  }, [feedbackList]);

  //tried to inital sort but that dont work because it will always show this state
  // useEffect(() => {
  //   const sorted = feedbackList.sort((a, b) => b.upvotes - a.upvotes);
  //   setFilteredList(sorted.slice());
  // }, []);

  // adds user feedback to the initial list
  function addToList(event, feedback, setFeedback) {
    setFeedbackList((prevList) => [feedback, ...prevList]);
    localStorage.setItem("listFeedback", JSON.stringify(feedbackList));
    setFeedback({ ...feedback, title: "", category: "Feature", detail: "" });
    // event.preventDefault(); only for submit
  }

  //finds in the initial list - the matching feedback and updates it with the passed in value
  function updateFeedback(feedbackUpdate) {
    const indexOfFeedback = feedbackList.findIndex(
      (feedback) => feedback.id === feedbackUpdate.id
    );
    feedbackList[indexOfFeedback] = feedbackUpdate;
    //test
    localStorage.setItem("listFeedback", JSON.stringify(feedbackList));
  }

  //finds in the initial list - the matching feedback and deletes it
  function deleteFeedback(id) {
    const indexOfFeedback = feedbackList.findIndex(
      (feedback) => feedback.id === Number(id)
    );
    feedbackList.splice(indexOfFeedback, 1);
  }

  // filter initial list by category
  function filterByCategory(event) {
    let category = event.currentTarget.id;
    // category.push(event.currentTarget.id);

    // eslint-disable-next-line array-callback-return
    const filtered = feedbackList.filter((feedback) => {
      if (feedback.category === category) {
        return feedback;
      } else if (category === "All") {
        return feedbackList;
      }
    });

    setFilteredList(filtered);
  }

  //sorts array and creates a copy of it so react re-renders
  function sortBy(event) {
    const value = event.currentTarget.value;
    console.log(value);

    const sorted = feedbackList.sort((a, b) => {
      if (value === "leastUpvotes") {
        return a.upvotes - b.upvotes;
      } else if (value === "mostUpvotes") {
        return b.upvotes - a.upvotes;
      } else if (value === "leastComments") {
        return a.comments?.length - b.comments?.length;
      } else if (value === "mostComments") {
        return b.comments?.length - a.comments?.length;
      }
      return 0;
    });

    // slice makes a copy of array, its needed because react only re-renders if it obtains a new array or a mutated array => sort only sorts only chances the other of the elements => BETTER To summarize: Array.prototype.sort does not create a new array but sorts the existing array in place and returns it:The sorted array. Note that the array is sorted in place, and no copy is made. Therefore the reference doesn't change in which case React will bail out of rendering.

    setFeedbackList(sorted.slice());
  }

  //testing filtering here needs to be modular
  const [planned, setPlanned] = useState([]);
  const [progress, setProgress] = useState([]);
  const [live, setLive] = useState([]);

  console.log(planned);
  console.log(progress);
  console.log(live);

  useEffect(() => {
    const plannedList = feedbackList.filter(
      (feedback) => feedback.status === "planned"
    );

    const progressList = feedbackList.filter(
      (feedback) => feedback.status === "in-progress"
    );

    const liveList = feedbackList.filter(
      (feedback) => feedback.status === "live"
    );

    setPlanned(plannedList);
    setProgress(progressList);
    setLive(liveList);
  }, [feedbackList]);
  ///test ending
  console.log(filteredList);

  console.log(feedbackList);

  const value = {
    addToList,
    feedbackList,
    updateFeedback,
    deleteFeedback,
    filterByCategory,
    filteredList,
    sortBy,
    planned,
    progress,
    live,
  };

  return (
    <FeedbackContext.Provider value={value}>
      {props.children}
    </FeedbackContext.Provider>
  );
}

export { FeedbackContext, FeedbackProvider };
