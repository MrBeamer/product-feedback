import React from "react";
import { Label } from "../";
import "./categoryBox.scss";

export default function CategoryBox() {
  return (
    <div className="category-box">
      <Label>All</Label>
      <Label>UX</Label>
      <Label>UI</Label>
      <Label>Enhancement</Label>
      <Label>Bug</Label>
      <Label>Feature</Label>
    </div>
  );
}
