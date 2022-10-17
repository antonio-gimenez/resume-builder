import React from "react";

function Input({ label, ...props }) {
  return (
    <div>
      {label && (
        <label className="input-label " htmlFor="name">
          {label}
        </label>
      )}
      <div style={{ position: "relative", width: "auto", overflow: "hidden" }}>
        <input {...props} />
        <div className="input-border" />
      </div>
    </div>
  );
}

export default Input;
