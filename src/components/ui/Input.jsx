import React from "react";

function Input({ label, ...props }) {
  const id = props.id || Math.random().toString(36).substr(2, 9);

  const type = props.type || "text";

  return (
    <div>
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="input-container">
        <input type={type} className="input" id={id} {...props} />
        <div className="form-decoration" />
      </div>
    </div>
  );
}

export default Input;
