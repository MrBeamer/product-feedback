import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { FeedbackContext } from "../utility/FeedbackContext";
import { useParams } from "react-router-dom";
import { Feedback, Button, Form, FormLabel, Textarea } from "../components";
import arrowLeft from "../assets/shared/icon-arrow-left.svg";

export default function FeedbackView() {
  const { feedbackId } = useParams();
  const context = useContext(FeedbackContext);
  console.log(feedbackId);

  const foundFeedback = context.feedbackList.find(
    (feedback) => feedback.id === Number(feedbackId)
  );
  console.log(Number(feedbackId));

  console.log(foundFeedback);

  return (
    <>
      <main className="main">
        <div className="flex-container">
          <div className="back-btn">
            <img src={arrowLeft} alt="arrow-left"></img>
            <Link to="/">Go Back</Link>
          </div>
          <Button backgroundColor="purple" url="/edit">
            Edit Feedback
          </Button>
        </div>
        <Feedback feedback={foundFeedback}></Feedback>
        <Form style={{ maxWidth: "825px" }}>
          <FormLabel label="Add Comment" />
          <Textarea />
          <p>{`${"250"} Characters left`}</p>
        </Form>
      </main>
    </>
  );
}
