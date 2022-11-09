import React, { useState } from "react";
import { defaultLevels, findLabelProgress } from "../../utils";

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
      <div className="range-ruler">
        {defaultLevels[levelType].map((level, index) => (
          <div key={index} className="tick" />
        ))}
      </div>
    </div>
  );
}

export default Range;
