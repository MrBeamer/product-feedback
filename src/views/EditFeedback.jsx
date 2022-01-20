import React, { useState, useContext } from "react";
import { Button, Form, FormInput, FormLabel } from "../components";
import editIcon from "../assets/shared/icon-edit-feedback.svg";

export default function EditFeedback() {
  function handleInputChange(event) {
    const value = event.currentTarget.value;
    const input = event.currentTarget.name;
    // setFeedback((prev) => {
    //   return { ...prev, [input]: value };
    // });
  }
  return (
    <main className="main">
      <Form icon={editIcon} title="Edit">
        <FormLabel
          label="Feedback Title"
          subLabel="Add a short, descriptive headline"
        />
        <FormInput onInputChange={handleInputChange} />
        <FormLabel
          label="Category"
          subLabel="Choose a category for your feedback"
        />
        <FormInput onInputChange={handleInputChange} />

        <FormLabel label="Update Status" subLabel="Change feedback state" />
        <FormInput onInputChange={handleInputChange} />
        <FormLabel
          label="Feedback Detail"
          subLabel="Include any specific comments on what should be improved, added, etc."
        />
        <FormInput onInputChange={handleInputChange} />
        <div className="create-feedback__flex-container">
          <Button backgroundColor="red" url="/" size="small">
            Delete
          </Button>
          <Button backgroundColor="darkblue" url="/" size="small">
            Cancel
          </Button>
          <input
            className="create-feedback__submit"
            type="submit"
            value="Save"
          />
        </div>
      </Form>
    </main>
  );
}
