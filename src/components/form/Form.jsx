import React from "react";
import "./form.scss";

export default function Form(props) {
  const { icon, title, children } = props;
  return (
    <form className="form">
      <img className="form__icon" src={icon} alt="plus icon" />
      <h2 className="form__headline">{title}</h2>
      {children}
    </form>
  );
}
