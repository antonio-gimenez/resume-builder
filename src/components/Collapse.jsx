import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function Collapse({ children, title = "New Item", open = true, ...props }) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="collapse-container" {...props} tabIndex={0}>
      <button className="collapse-button" onClick={() => setOpen(!isOpen)}>
        <div className={`collapse-title`}>
          <span>{title}</span>
          <ChevronDownIcon className={`chevron ${isOpen ? "chevron-open" : "chevron-closed"}`} />
        </div>
      </button>
      <span className={` collapse-content ${isOpen ? "block" : "hidden"} `}>{children}</span>
    </div>
  );
}

export default Collapse;
