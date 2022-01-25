import React from "react";
import "./textarea.scss";

export default function Textarea(props) {
  const { type, value, onInputChange, test, ...rest } = props;

  return (
    <textarea
      className="textarea"
      type={type ?? "text"}
      name="comment"
      id="comment"
      value={value}
      onChange={(event) => onInputChange(event)}
      required
      {...rest}
      rows="2"
      maxLength="250"
    />
  );
}
