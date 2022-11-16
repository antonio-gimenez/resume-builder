import React from "react";

function Button({ label, color, type = "button", children, borderless = false, block = false, ...props }) {
  const id = props.id || Math.random().toString(36).substr(2, 9);
  const buttonType = type ? type : "button";
  const buttonColor = color ? color : "";
  const buttonBlock = block ? "block" : "";
  const buttonBorderless = borderless ? "borderless" : "";
  return (
    <div>
      {label && (
        <label className="label " htmlFor={id}>
          {label}
        </label>
      )}
      <button
        type={buttonType}
        id={id}
        className={`button ${buttonBorderless} ${buttonColor} ${buttonBlock}`}
        {...props}
      >
        <span className="button-text">{children}</span>
        <span className="button-decoration" />
      </button>
    </div>
  );
}

export default Button;
