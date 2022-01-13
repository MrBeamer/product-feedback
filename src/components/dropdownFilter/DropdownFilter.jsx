import React from "react";
import { useSelect } from "downshift";
// items = ['Neptunium', 'Plutonium', ...]
// import { items, menuStyles } from "./utils";
import "./dropdownFilter.scss";

const items = ["apple", "banana", "potato", "beans"];

export default function DropdownFilter() {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items });

  const menuStyles = {
    boxShadow: "0px 10px 40px -7px rgba(55, 63, 104, 0.350492)",
    fontSize: "16px",
    lineHeight: "23px",
    color: "#647196",
    listStyle: "none",
    borderRadius: "10px",
    padding: "12px 24px",
  };
  console.log(selectedItem);
  return (
    <div className="dropdown">
      <label {...getLabelProps()}></label>
      <button type="button" {...getToggleButtonProps()}>
        {selectedItem || "Feature"}
      </button>
      <ul {...getMenuProps()} style={menuStyles}>
        {isOpen &&
          items.map((item, index) => (
            <li
              style={highlightedIndex === index ? { color: "#AD1FEA" } : {}}
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}
