import React from "react";
function Card({ children }) {
  if (!children) return console.error("Card component requires children");
  return <div className={`card  `}>{children}</div>;
}

function CardHeader({ children }) {
  return <div className="card-header ">{children}</div>;
}

function CardContent({ children }) {
  return <div className="card-content">{children}</div>;
}

function CardActions({ children }) {
  return <div className="card-actions">{children}</div>;
}

function CardFooter({ children }) {
  return <footer className="card-footer">{children}</footer>;
}

export { Card, CardContent, CardHeader, CardActions, CardFooter };

export default Card;
