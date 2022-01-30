import React from "react";
import { Link } from "react-router-dom";
import "./goBack.scss";

export default function GoBack({ color, fColor }) {
  return (
    <div className="go-back">
      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 9L2 5l4-4"
          stroke={color}
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
      <Link style={{ color: [fColor] }} to="/">
        Go Back
      </Link>
    </div>
  );
}
