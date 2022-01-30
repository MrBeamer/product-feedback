import React, { useState, useContext } from "react";
import "./createFeedback.scss";
import { Button } from "../";
import { FeedbackContext } from "../../utility/FeedbackContext";
import plusIcon from "../../assets/shared/icon-new-feedback.svg";

export default function CreateFeedback() {
  const [feedback, setFeedback] = useState({
    id: "",
    title: "",
    category: "Feature",
    description: "",
    upvotes: 0,
    comments: [],
    status: "suggestion",
  });

  const context = useContext(FeedbackContext);

  function handleInputChange(event) {
    const value = event.currentTarget.value;
    const input = event.currentTarget.name;
    setFeedback((prev) => {
      return { ...prev, [input]: value, id: Math.floor(Math.random() * 999) };
    });
    // could be a hook same in the edit form
  }

  return (
    <>
      <form
        className="create-feedback"
        // no need because no post
        // onSubmit={(event) => {
        //   context.addToList(event, feedback, setFeedback);
        // }}
      >
        <img className="create-feedback__icon" src={plusIcon} alt="plus icon" />
        <h2 className="create-feedback__headline">Create New Feedback</h2>
        <label htmlFor="create-feedback__title">Feedback Title</label>
        <p className="create-feedback__subtitle">
          Add a short, descriptive headline
        </p>
        <input
          className="create-feedback__input"
          type="text"
          name="title"
          id="title"
          value={feedback.title}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="create-feedback__title">Category</label>
        <p className="create-feedback__subtitle">
          Choose a category for your feedback
        </p>
        <select
          className="create-feedback__dropdown"
          name="category"
          onChange={handleInputChange}
        >
          <option className="dropdown__option" value="Feature">
            Feature
          </option>
          <option className="dropdown__option" value="UI">
            UI
          </option>
          <option className="dropdown__option" value="UX">
            UX
          </option>
          <option className="dropdown__option" value="Enhancement">
            Enhancement
          </option>
          <option className="dropdown__option" value="Bug">
            Bug
          </option>
        </select>

        <label htmlFor="create-feedback__title">Feedback Detail</label>
        <p className="create-feedback__subtitle">
          Include any specific comments on what should be improved, added, etc.
        </p>
        <input
          className="create-feedback__input"
          type="text-field"
          name="description"
          id="description"
          value={feedback.description}
          onChange={handleInputChange}
          required
        />
        <div className="create-feedback__flex-container">
          <Button backgroundColor="darkblue" url="/" size="small">
            Cancel
          </Button>
          {/* <input
            className="create-feedback__submit"
            type="submit"
            value="Add Feedback"
          /> */}
          <Button
            backgroundColor="purple"
            url="/"
            on={(event) => {
              context.addToList(event, feedback, setFeedback);
            }}
          >
            Add Feedback
          </Button>
        </div>
      </form>
    </>
  );
}

// input and onChange on form are commented out because if I decide to do a fullstack app i need to be able to post
