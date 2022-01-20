import React from "react";
import "./formInput.scss";

export default function FormInput(props) {
  const { value, onInputChange, test, ...rest } = props;

  return (
    <input
      className="input"
      type="text"
      name="title"
      id="title"
      value={value}
      onChange={onInputChange}
      required
      {...rest}
    />
  );
}
