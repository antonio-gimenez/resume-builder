import React from "react";

function Input({ label, ...props }) {
  const id = props.id || Math.random().toString(36).substr(2, 9);

  const type = props.type || "text";

  return (
    <div className="input-container">
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
      <input type={type} className="input" id={id} {...props} />
    </div>
  );
}

export default Input;
