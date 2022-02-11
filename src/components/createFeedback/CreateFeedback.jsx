import React, { useState, useContext } from "react";
import "./createFeedback.scss";
import {
  Button,
  Form,
  FormLabel,
  FormInput,
  Option,
  Select,
  Textarea,
} from "../";
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
    <Form icon={plusIcon} title="Create New Feedback">
      <FormLabel
        label="Feedback Title"
        subLabel="Add a short, descriptive headline"
      />
      <FormInput
        onInputChange={handleInputChange}
        value={feedback.title}
        name="title"
      />
      <FormLabel
        label="Category"
        subLabel="Choose a category for your feedback"
      />
      <Select onInputChange={handleInputChange} name="category">
        <Option value="Feature">Feature</Option>
        <Option value="UI">UI</Option>
        <Option value="UX">UX</Option>
        <Option value="Enhancement">Enhancement</Option>
        <Option value="Bug">Bug</Option>
      </Select>
      <FormLabel
        label="Feedback Detail"
        subLabel="Include any specific comments on what should be improved, added, etc."
      />
      <Textarea
        onInputChange={handleInputChange}
        value={feedback.description}
        name="description"
      />
      <div className="form-flex-container">
        <Button backgroundColor="darkblue" url="/" size="small">
          Cancel
        </Button>
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
    </Form>
  );
}
