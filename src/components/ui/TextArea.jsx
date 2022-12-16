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
      <textarea className="textarea" id={id} {...props} />
    </div>
  );
}

export default TextArea;
