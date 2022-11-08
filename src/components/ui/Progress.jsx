import React from "react";

function Progress({ progress, ...props }) {
  const widthProgress = {
    width: progress + "%",
  };

  return (
    <div {...props} className={"progress"}>
      <div className="bar" style={{ ...widthProgress }} />
    </div>
  );
}

export default Progress;
