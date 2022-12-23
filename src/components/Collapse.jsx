import React, { useState } from "react";
import { ReactComponent as Chevron } from "../assets/icons/chevron-down-24.svg";

function Collapse({ children, title = "New Item", open = true, ...props }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="collapse" {...props} tabIndex={0}>
      <button type={"button"} className="collapse-button" onClick={() => setOpen(!isOpen)}>
        <div className={`collapse-title`}>
          <span>{title}</span>
          <Chevron className={`chevron ${isOpen ? "chevron-open" : "chevron-closed"}`} />
        </div>
      </button>
      <span className={`collapse-content ${isOpen ? "visible" : "hidden"} `}>{children}</span>
    </div>
  );
}

function CollapseTitle({ children }) {
  return <div className="collapse-title">{children}</div>;
}

export { Collapse, CollapseTitle };
export default Collapse;
