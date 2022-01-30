import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FeedbackContext } from "../utility/FeedbackContext";
import { useParams } from "react-router-dom";
import {
  Feedback,
  Button,
  Form,
  Heading,
  Textarea,
  CommentContainer,
  GoBack,
} from "../components";

export default function FeedbackView() {
  const [feedback, setFeedback] = useState({});
  const { feedbackId } = useParams();
  const [comment, setComment] = useState("");
  const context = useContext(FeedbackContext);
  const { pathname } = useLocation();

  //find the clicked feedback in the feedbacklist
  useEffect(() => {
    const foundFeedback = context.feedbackList.find(
      (feedback) => feedback.id === Number(feedbackId)
    );
    setFeedback(foundFeedback);
  }, [context.feedbackList, feedbackId]);

  // get input from textarea
  function handleInputChange(event) {
    const userInput = event.target.value;
    setComment(userInput);
  }

  function addComment() {
    // prevents empty comments
    if (comment.length > 10)
      setFeedback({
        ...feedback,
        comments: [
          ...feedback.comments,
          {
            id: 1,
            text: comment,
            user: {
              image: "image-suzanne",
              name: "Suzanne Chang",
              username: "upbeat1811",
            },
          },
        ],
      });
    setComment("");
  }

  useEffect(() => {
    context.updateFeedback(feedback);
  }, [context, feedback]);

  return (
    <>
      <main className="main">
        <div className="flex-container--2 ">
          <GoBack />
          <Button backgroundColor="purple" url={`${pathname}/edit`}>
            Edit Feedback
          </Button>
        </div>
        <Feedback feedback={feedback}></Feedback>
        <CommentContainer feedback={feedback} />
        <Form style={{ maxWidth: "825px", padding: "24px 32px 32px 32px" }}>
          <Heading style={{ marginBottom: "24px" }}>Add Comment</Heading>
          <Textarea onInputChange={handleInputChange} value={comment} />
          <div className="flex-container justify-between">
            <p className="characters-left">{`${
              250 - comment.length
            } Characters left`}</p>
            <Button backgroundColor="purple" on={addComment}>
              Post Comment
            </Button>
          </div>
        </Form>
      </main>
    </>
  );
}
