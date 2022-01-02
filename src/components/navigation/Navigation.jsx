import React from "react";
import "./navigation.scss";
import { LogoBox } from "../";
import { CategoryBox } from "../";
import { RoadMapBox } from "../";

export default function Navigation() {
  return (
    <div className="nav">
      <LogoBox />
      <CategoryBox />
      <RoadMapBox />
    </div>
  );
}
