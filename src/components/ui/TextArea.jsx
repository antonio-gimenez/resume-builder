import React from "react";

function TextArea({ label, ...props }) {
  const id = props.id || Math.random().toString(36).substr(2, 9);

  return (
    <div className="textarea-container">
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="textarea-container">
        <textarea className="textarea" id={id} {...props} />
        <div className="form-decoration" />
      </div>
    </div>
  );
}

export default TextArea;
