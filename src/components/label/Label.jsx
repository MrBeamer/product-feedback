import React from "react";
import "./label.scss";

export default function Label({ children, id, ...rest }) {
  return (
    <p className="label" id={id} {...rest}>
      {children}
    </p>
  );
}
