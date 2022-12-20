import React from "react";
function Card({ children, outlined = true }) {
  if (!children) return console.error("Card component requires children");
  const outlinedClass = outlined ? "card-outlined" : "";
  return <div className={`card  ${outlinedClass}`}>{children}</div>;
}

function CardActions({ children }) {
  return <div className="card-actions">{children}</div>;
}

function CardContent({ children }) {
  return <div className="card-content">{children}</div>;
}

function CardFooter({ children }) {
  return <footer className="card-footer">{children}</footer>;
}

function CardHeader({ children }) {
  return <div className="card-header">{children}</div>;
}

export { Card, CardContent, CardHeader, CardActions, CardFooter };

export default Card;
