import React from "react";

function Title({ children }) {
  const style = {
    fontSize: "1.5rem",
    fontWeight: "400",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    textTransform: "uppercase",
    letterSpacing: "0.1rem",
  };

  return <h1 style={style}>{children}</h1>;
}

export default Title;
