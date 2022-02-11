import React from "react";
import "./formLabel.scss";

export default function FormLabel({ label, subLabel }) {
  return (
    <div className="form-label">
      <label htmlFor="input" className="form-label__title">
        {label}
      </label>
      <p className="form-label__subtitle">{subLabel}</p>
    </div>
  );
}
