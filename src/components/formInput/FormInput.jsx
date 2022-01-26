import React from "react";
import "./formInput.scss";

export default function FormInput(props) {
  const { type, value, name, onInputChange, test, ...rest } = props;

  return (
    <input
      className="input"
      type={type ?? "text"}
      name={name}
      id={name}
      value={value}
      onChange={onInputChange}
      required
      {...rest}
    />
  );
}
