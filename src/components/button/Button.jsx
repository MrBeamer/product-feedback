import React from "react";
import "./button.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function Button(props) {
  const { backgroundColor, url, children, size } = props;

  const classNames = clsx({
    btn: true,
    "btn--purple": backgroundColor === "purple",
    "btn--darkblue": backgroundColor === "darkblue",
    "btn--blue": backgroundColor === "blue",
    "btn--red": backgroundColor === "red",
    "btn--medium": size === "medium",
    "btn--small": size === "small",
  });

  return (
    <Link to={url ?? ""} className={classNames}>
      {children}
    </Link>
  );
}
