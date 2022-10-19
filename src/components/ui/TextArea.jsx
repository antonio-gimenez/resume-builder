import React from "react";

function TextArea({ label, ...props }) {
  const id = props.id || Math.random().toString(36).substr(2, 9);

  return (
    <div>
      {label && (
        <label className="label " htmlFor={id}>
          {label}
        </label>
      )}
      <div className="input-container">
        <textarea className="textarea" id={id} {...props} />
        <div className="input-decoration" />
      </div>
    </div>
  );
}

export default TextArea;
