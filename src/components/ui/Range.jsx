import React, { useState } from "react";
import { defaultLevels, findLabelProgress } from "../../utils";

function Range({ levelType = "skills", steps = 30, currentProgress = 5, handleChange, ...props }) {
  const [progress, setProgress] = useState(currentProgress);

  const onChange = (e) => {
    // check if e is an event object
    if (e.target) {
      const { value } = e.target;
      setProgress(value);
      return handleChange(e);
    }

    const value = e.progress;
    const id = props.id;
    const name = props.name;
    setProgress(value);
    handleChange({ target: { id, name, value } });
  };

  function isLevelSelected(min, max) {
    return Boolean(progress >= min && progress <= max);
  }

  function getLevelLabel() {
    // if currentProgress is between min and max, return the style
    return defaultLevels[levelType].find((level) => currentProgress >= level.min && currentProgress <= level.max).style;
  }

  return (
    <div className={`level-container`}>
      <label className="label" htmlFor="name">
        {findLabelProgress(progress, levelType)}
      </label>
      <div className={`level-selector level-${getLevelLabel()}`}>
        {defaultLevels[levelType].map((level) => {
          return (
            <div
              key={level.id}
              className={isLevelSelected(level.min, level.max) ? `level selected` : "level"}
              onClick={() => onChange(level)}
            />
          );
        })}
      </div>
      {/* <input
        type="range"
        step={steps}
        min={5}
        className={"range"}
        max={100}
        {...props}
        value={progress}
        onChange={onChange}
      /> */}
    </div>
  );
}

export default Range;
