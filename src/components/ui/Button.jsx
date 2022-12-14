import React from "react";

function Button({ as = "button", color = "default", type = "button", children, block = false, ...props }) {
  const id = props.id || Math.random().toString(36).substr(2, 9);
  const buttonType = type ? type : "button";
  const buttonColor = color ? color : "";
  const buttonBlock = block ? "block" : "";
  if (as === "link") {
    return (
      <a role="link" aria-label={children} id={id} className={`button link  ${buttonBlock}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <div>
      <button type={buttonType} id={id} className={`button ${buttonColor} ${buttonBlock}`} {...props}>
        <span className="button-text">{children}</span>
      </button>
    </div>
  );
}

export default Button;
