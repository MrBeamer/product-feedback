import React, { useState } from "react";
import { CategoryBox } from "../";
import { RoadMapBox } from "../";
import "./logoBox.scss";

export default function LogoBox() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenClick() {
    setIsOpen((prevState) => !prevState);

    //disables scroll when modal/mobile-menu is open
    !isOpen
      ? (document.body.style.position = "fixed")
      : (document.body.style.position = "relative");
  }

  return (
    <div className="logo-box">
      <div className="logo-box__content">
        <h1 className="logo-box__title">Birdie</h1>
        <p className="logo-box__subtitle">Feedback Board</p>
      </div>
      {!isOpen ? (
        <i
          className="fas fa-bars logo-box__mobile-menu"
          onClick={handleOpenClick}
        ></i>
      ) : (
        <i
          className="fas fa-times logo-box__mobile-menu"
          onClick={handleOpenClick}
        ></i>
      )}
      {isOpen && (
        <div className="logo-box__mobile-nav">
          <CategoryBox />
          <RoadMapBox />
        </div>
      )}

      {isOpen && (
        <div className="logo-box__overlay" onClick={handleOpenClick}></div>
      )}
    </div>
  );
}
