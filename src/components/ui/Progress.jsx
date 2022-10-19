import React from "react";

function Progress({ progress, backgroundColor = "rgb(28, 40, 59)" }) {
  const widthProgress = {
    width: progress + "%",
    backgroundColor: backgroundColor,
    height: "0.4rem",
    position: "relative",
    borderRadius: "0.5rem",
  };

  return (
    <div className={"progress"}>
      <div style={{ ...widthProgress }} />
    </div>
  );
}

export default Progress;
