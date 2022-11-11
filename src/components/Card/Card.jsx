import React from "react";
function Card({ children, rounded = false }) {
  if (!children) return console.error("Card component requires children");
  const roundedClass = rounded ? "rounded" : "";
  return <div className={`card ${roundedClass}`}>{children}</div>;
}

export default Card;
