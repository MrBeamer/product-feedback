import React from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/shared/icon-arrow-left.svg";
import "./goBack.scss";

export default function GoBack() {
  return (
    <div className="go-back">
      <img src={arrowLeft} alt="arrow-left"></img>
      <Link to="/">Go Back</Link>
    </div>
  );
}
