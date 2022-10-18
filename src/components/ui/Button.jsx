import React from "react";

function Button({ label, children, ...props }) {
  const id = props.id || Math.random().toString(36).substr(2, 9);

  const type = props.type || "button";

  return (
    <div>
      {label && (
        <label className="label " htmlFor={id}>
          {label}
        </label>
      )}
      <div type={type} id={id} className="button" {...props}>
        <span className="button-text">{children}</span>
        <span className="button-decoration" />
      </div>
    </div>
  );
}

export default Button;
