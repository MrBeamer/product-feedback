import React from "react";
import "./formLabel.scss";

export default function FormLabel({ label, subLabel }) {
  return (
    <>
      <label htmlFor="form-label__title">{label}</label>
      <p className="form-label__subtitle">{subLabel}</p>
    </>
  );
}
