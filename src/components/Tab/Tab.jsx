import React from "react";

function Tab({ children, active, ...props }) {
  if (!children) return console.error("Tab component requires children");
  return (
    <button
      className={`
    button-tab ${active ? "active" : ""}
    `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Tab;
