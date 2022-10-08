import React from "react";

function Container({ children, customStyle, maxWidth = "full" }) {
  const style = {
    margin: "0 auto",
    padding: "0 1rem",
    maxWidth: maxWidth,
    width: "100%",
  };
  return <div style={customStyle || style}>{children}</div>;
}

export default Container;
