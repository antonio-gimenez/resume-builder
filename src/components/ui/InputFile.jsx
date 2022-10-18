import React from "react";

function InputFile({ label, ...props }) {
  const id = props.id || Math.random().toString(36).substr(2, 9);
  const type = props.type || "file";
  return (
    <div>
      {label && (
        <label className="label button" htmlFor={id}>
          {label}
          <div className="input-decoration" />
        </label>
      )}
      <div className="input-container">
        <input type={type} className="input hidden" id={id} {...props} />
        <div className="input-decoration" />
      </div>
    </div>
  );
}

export default InputFile;
