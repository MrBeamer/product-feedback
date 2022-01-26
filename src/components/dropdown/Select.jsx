import React from "react";
import "./select.scss";

export default function Select(props) {
  const { value, children, onInputChange, name, ...rest } = props;
  return (
    <select
      className="select"
      value={value}
      onChange={onInputChange}
      name={name}
      {...rest}
    >
      {children}
    </select>
  );
}
