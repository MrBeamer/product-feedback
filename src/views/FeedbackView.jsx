import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FeedbackContext } from "../utility/FeedbackContext";
import { useParams } from "react-router-dom";
import {
  Feedback,
  Button,
  Form,
  Heading,
  Textarea,
  CommentContainer,
} from "../components";
import arrowLeft from "../assets/shared/icon-arrow-left.svg";

export default function FeedbackView() {
  const [feedback, setFeedback] = useState({});
  const { feedbackId } = useParams();
  const context = useContext(FeedbackContext);

  useEffect(() => {
    const foundFeedback = context.feedbackList.find(
      (feedback) => feedback.id === Number(feedbackId)
    );
    setFeedback(foundFeedback);
  }, [context.feedbackList, feedbackId]);

  // const foundFeedback = context.feedbackList.find(
  //   (feedback) => feedback.id === Number(feedbackId)
  // );

  console.log(feedback);

  return (
    <>
      <main className="main">
        <div className="flex-container--2 ">
          <div className="back-btn">
            <img src={arrowLeft} alt="arrow-left"></img>
            <Link to="/">Go Back</Link>
          </div>
          <Button backgroundColor="purple" url="/edit">
            Edit Feedback
          </Button>
        </div>
        <Feedback feedback={feedback}></Feedback>
        <CommentContainer feedback={feedback} />
        <Form style={{ maxWidth: "825px", padding: "24px 32px 32px 32px" }}>
          <Heading style={{ marginBottom: "24px" }}>Add Comment</Heading>
          <Textarea />
          <div className="flex-container justify-between">
            <p className="characters-left">{`${"250"} Characters left`}</p>
            <Button backgroundColor="purple">Post Comment</Button>
          </div>
        </Form>
      </main>
    </>
  );
}
