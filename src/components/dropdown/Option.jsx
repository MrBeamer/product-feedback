import React from "react";

export default function Option({ value, children }) {
  return (
    <option className="dropdown__option" value={value}>
      {children}
    </option>
  );
}
