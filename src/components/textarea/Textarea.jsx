import React from "react";
import "./textarea.scss";

export default function Textarea(props) {
  const { type, name, value, onInputChange, ...rest } = props;

  return (
    <textarea
      className="textarea"
      type={type ?? "text"}
      name={name}
      id={name}
      value={value}
      onChange={(event) => onInputChange(event)}
      required
      {...rest}
      rows="2"
      maxLength="250"
    />
  );
}
