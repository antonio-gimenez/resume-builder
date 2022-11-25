import React, { Children, useState } from "react";
import Tab from "./Tab";

function Tabs({ children, wrap = false, onChange, direction = "horizontal" }) {
  const [activeTab, setActiveTab] = useState(0);
  if (!children) return console.error("Tabs component requires children");

  function handleActiveTab(index) {
    if (index < 0 && index > Children.count(children)) {
      return console.error("Index out of bounds");
    }
    setActiveTab(index);
    if (onChange) onChange(index);
  }

  return (
    <div className={`tabs ${direction} ${wrap ? "wrap" : "nowrap"}`}>
      {Children.map(children, (child, index) => {
        return (
          <Tab onClick={() => handleActiveTab(index)} active={index === activeTab}>
            {child}
          </Tab>
        );
      })}
      <div className={`glider tab-${activeTab}`} />
    </div>
  );
}

export default Tabs;
