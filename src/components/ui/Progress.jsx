import React from "react";
import { Container } from "../layouts";

function Progress({ progress, backgroundColor = "rgb(28, 40, 59)" }) {
  const styleBar = {
    width: progress + "%",
    backgroundColor: backgroundColor,
    height: "0.4rem",
    position: "relative",
    borderRadius: "0.5rem",
  };

  return (
    <div className={"progress"}>
      <div style={{ ...styleBar }} />
    </div>
  );
}

export default Progress;
