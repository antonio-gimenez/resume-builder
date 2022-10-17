import React from "react";

function Container({ children, ...props }) {
  if (props.className) {
    props.className = `container ${props.className}`;
  }

  return (
    <div {...props} className={"container"}>
      {children}
    </div>
  );
}

export default Container;
