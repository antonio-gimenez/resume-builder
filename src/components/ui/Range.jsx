import React, { useState } from "react";

const defaultLevels = [
  { label: "Apprentice", progress: 5, min: 0, max: 20 },
  { label: "Novice", progress: 25, min: 20, max: 35 },
  { label: "Intermediate", progress: 50, min: 35, max: 55 },
  { label: "Expert", progress: 75, min: 55, max: 80 },
  { label: "Master", progress: 100, min: 80, max: 100 },
];
function Range({ levels = defaultLevels, currentProgress = 5, handleChange, ...props }) {
  const [progress, setProgress] = useState(currentProgress);
  const [proficency] = useState(levels);

  const onChange = (e) => {
    setProgress(e.target.value);
    handleChange(e);
  };

  const findLevel = (progress) => {
    const level = proficency.find((level) => progress >= level.min && progress <= level.max);
    return level ? level.label : "Apprentice";
  };

  return (
    <div className="range-container">
      <label className="label" htmlFor="name">
        {findLevel(progress)}
      </label>
      <input type="range" min={5} max={100} {...props} value={progress} onChange={onChange} />
    </div>
  );
}

export default Range;
