import React from "react";

function Progress({ progress, backgroundColor = "rgb(60, 82, 132)" }) {
  const widthProgress = {
    width: progress + "%",
  };

  return (
    <div className={"progress"}>
      <div className="bar" style={{ ...widthProgress }} />
    </div>
  );
}

export default Progress;
