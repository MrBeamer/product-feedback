import React, { useState } from "react";
import "./createFeedback.scss";
import { Button } from "../";
import { SortSwitch } from "../";
import plusIcon from "../../assets/shared/icon-new-feedback.svg";

export default function CreateFeedback() {
  const [feedback, setFeedback] = useState({
    title: "",
    category: "Feature",
    detail: "",
  });
  function handleSubmitClick(event) {
    console.log(feedback);
    setFeedback({ ...feedback, title: "", category: "Feature", detail: "" });
    event.preventDefault();
  }
  function handleInputChange(event) {
    const value = event.currentTarget.value;
    const input = event.currentTarget.name;

    if (input === "title") {
      feedback.title = value;
      setFeedback((prev) => {
        return { ...prev, title: value };
      });
    } else if (input === "category") {
      setFeedback((prev) => {
        return { ...prev, category: value };
      });
    } else {
      feedback.detail = value;
      setFeedback((prev) => {
        return { ...prev, detail: value };
      });
    }
  }

  return (
    <>
      <form className="create-feedback" onSubmit={handleSubmitClick}>
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
        />
        <label htmlFor="create-feedback__title">Category</label>
        <p className="create-feedback__subtitle">
          Choose a category for your feedback
        </p>
        <select
          className="create-feedback__dropdown"
          name="category"
          value={feedback.category}
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
          name="detail"
          id="detail"
          value={feedback.detail}
          onChange={handleInputChange}
        />
        <div className="create-feedback__flex-container">
          <Button backgroundColor="darkblue" url="/" size="small">
            Cancel
          </Button>
          <Button backgroundColor="purple">Add Feedback</Button>
          <input type="submit" value="Add Feedback" />
        </div>
      </form>
    </>
  );
}
