import React from "react";
import "./navigation.scss";
import { LogoBox, CategoryBox, RoadMapBox } from "../";

export default function Navigation() {
  return (
    <div className="nav">
      <LogoBox />
      <CategoryBox />
      <RoadMapBox />
    </div>
  );
}
