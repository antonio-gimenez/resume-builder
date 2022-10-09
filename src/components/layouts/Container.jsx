import React from "react";

function Container({ children, customStyle, maxWidth = "100%" }) {
  const style = {
    margin: "0 auto",
    padding: "0 0rem",
    maxWidth: maxWidth,
    width: "100%",
    height: "100%",
  };
  if (customStyle) {
    for (const [key, value] of Object.entries(customStyle)) {
      style[key] = value;
    }
  }

  return <div style={style}>{children}</div>;
}

export default Container;
