import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Container } from "./layouts";

function Collapse({ children, title, open = true, ...props }) {
  const [isOpen, setOpen] = useState(open);

  return (
    <Container {...props} tabIndex={0}>
      <button onClick={() => setOpen(!isOpen)}>
        <ChevronDownIcon className={`chevron ${isOpen ? "chevron-open" : "chevron-closed"}`} />
        <div className={`font-semibold text-xl cursor-pointer`}>{title}</div>
      </button>
      <span className={`  ${isOpen ? "block" : "hidden"}   w-full h-full`}>{children}</span>
    </Container>
  );
}

export default Collapse;
