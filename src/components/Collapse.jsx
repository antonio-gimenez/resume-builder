import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function Collapse({ children, subheader, title = "Undefined", open = true, ...props }) {
  const [isOpen, setOpen] = useState(open);

  return (
    <div className="collapse-container" {...props} tabIndex={0}>
      <button className="collapse-button" onClick={() => setOpen(!isOpen)}>
        <div className={`collapse-title`}>
          <span>{title}</span>
          <span className="collapse-subheader">{subheader}</span>
          <ChevronDownIcon className={`chevron ${isOpen ? "chevron-open" : "chevron-closed"}`} />
        </div>
      </button>
      <span className={`  ${isOpen ? "block" : "hidden"} auto-grid  w-full h-full`}>{children}</span>
    </div>
  );
}

export default Collapse;
