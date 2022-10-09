import React from "react";

function Title({ children, customStyle, h, ...props }) {
  // if h == 1, then h = "h1"
  const Tag = `h${h}` || "h1";

  const style = {
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    letterSpacing: "0.1rem",
  };

  if (customStyle) {
    for (const [key, value] of Object.entries(customStyle)) {
      style[key] = value;
    }
  }

  return (
    <Tag style={style} {...props}>
      {children}
    </Tag>
  );
}

export default Title;
