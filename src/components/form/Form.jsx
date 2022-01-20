import React from "react";
import "./form.scss";

export default function Form(props) {
  const { icon, title, children, ...rest } = props;
  return (
    <form className="form" {...rest}>
      <img className="form__icon" src={icon ?? ""} alt={icon} />
      <h2 className="form__headline">{title}</h2>
      {children}
    </form>
  );
}
