import React, { useState } from "react";
import { defaultLevels, findLabelProgress } from "../../utils";

function Range({ levelType = "skills", steps = 30, currentProgress = 5, handleChange, ...props }) {
  const [progress, setProgress] = useState(currentProgress);
  const onChange = (e) => {
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
    return defaultLevels[levelType].find((level) => currentProgress >= level.min && currentProgress <= level.max).style;
  }

  return (
    <div className={`input-container level-container`}>
      <label className="label" htmlFor="name">
        {props.disabled ? "Disabled" : findLabelProgress(progress, levelType, props.disabled)}
      </label>
      <div className={`level-selector ${props.disabled && "disabled"} level-${getLevelLabel()}`}>
        {defaultLevels[levelType].map((level) => {
          return (
            <span
              id={level.id}
              key={level.id}
              className={isLevelSelected(level.min, level.max) ? `level-${getLevelLabel()}  level selected` : "level"}
              onClick={() => onChange(level)}
            />
          );
        })}
        <div className="thumb" />
      </div>
    </div>
  );
}

export default Range;
