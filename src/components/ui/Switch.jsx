import React from "react";

function Switch({ label = "Label", checked, onChange }) {
  return (
    <label className="toggle-container" htmlFor="toggle">
      <input
        type={"checkbox"}
        role="switch"
        id={"toggle"}
        checked={checked}
        aria-checked={checked}
        onChange={onChange}
        className={"toggle"}
      />
      {label && <span className="label-toggle">{label}</span>}
    </label>
  );
}

export default Switch;
