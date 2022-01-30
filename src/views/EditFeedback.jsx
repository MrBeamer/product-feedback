import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { FeedbackContext } from "../utility/FeedbackContext";
import {
  Button,
  Form,
  FormInput,
  FormLabel,
  Select,
  Option,
  Textarea,
} from "../components";
import editIcon from "../assets/shared/icon-edit-feedback.svg";

export default function EditFeedback() {
  const { feedbackId } = useParams();
  const context = useContext(FeedbackContext);

  //find displayed feedback in the the FeedBacklist
  const foundFeedback = context.feedbackList.find(
    (feedback) => feedback.id === Number(feedbackId)
  );

  const [feedback, setFeedback] = useState({
    id: foundFeedback.id,
    title: foundFeedback.title,
    category: foundFeedback.category,
    description: foundFeedback.description,
    upvotes: foundFeedback.upvotes,
    comments: foundFeedback.comments,
    status: foundFeedback.status,
  });

  console.log(foundFeedback);

  function handleInputChange(event) {
    const value = event.currentTarget.value;
    const input = event.currentTarget.name;

    console.log(input);
    console.log(value);

    setFeedback((prev) => {
      return { ...prev, [input]: value };
    });
  }
  return (
    <main className="main">
      <Form icon={editIcon} title="Edit">
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
        <FormLabel label="Update Status" subLabel="Change feedback state" />
        <Select
          onInputChange={handleInputChange}
          name="status"
          value={feedback.status}
        >
          <Option value="suggestion">Suggestion</Option>
          <Option value="planned">Planned</Option>
          <Option value="in-progress">In-Progress</Option>
          <Option value="live">Live</Option>
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
        <div className="create-feedback__flex-container">
          <Button
            backgroundColor="red"
            url="/"
            size="small"
            on={() => context.deleteFeedback(feedbackId)}
          >
            Delete
          </Button>
          <Button backgroundColor="darkblue" url="/" size="small">
            Cancel
          </Button>
          <Button
            backgroundColor="purple"
            url="/"
            on={() => context.updateFeedback(feedback)}
          >
            Save Changes
          </Button>
        </div>
      </Form>
    </main>
  );
}
