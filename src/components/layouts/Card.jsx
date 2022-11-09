import React from "react";

function Card({ title, children }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-content">{children}</div>
    </div>
  );
}

export default Card;
