import React from "react";

function Button({ as = "button", color, type = "button", children, borderless = false, block = false, ...props }) {
  const id = props.id || Math.random().toString(36).substr(2, 9);
  const buttonType = type ? type : "button";
  const buttonColor = color ? color : "";
  const buttonBlock = block ? "block" : "";
  const buttonBorderless = borderless ? "borderless" : "";

  if (as === "link") {
    return (
      <a role="link" id={id} className={`button ${buttonColor} ${buttonBlock} ${buttonBorderless}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <div>
      <button
        type={buttonType}
        id={id}
        className={`button ${buttonBorderless} ${buttonColor} ${buttonBlock}`}
        {...props}
      >
        <span className="button-text">{children}</span>
      </button>
    </div>
  );
}

export default Button;
