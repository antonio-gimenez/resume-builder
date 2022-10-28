import React, { useState } from "react";
import { findLabelProgress } from "../../utils";

function Range({ levelType = "skills", currentProgress = 5, handleChange, ...props }) {
  const [progress, setProgress] = useState(currentProgress);

  const onChange = (e) => {
    setProgress(e.target.value);
    handleChange(e);
  };

  return (
    <div>
      <label className="label" htmlFor="name">
        {findLabelProgress(progress, levelType)}
      </label>
      <input type="range" min={5} className={"range"} max={100} {...props} value={progress} onChange={onChange} />
      {props.disabled && <div className="range-disabled-overlay" />}
    </div>
  );
}

export default Range;
