import React, { useState } from "react";

function Dropdown({ label, items, onClick = () => {}, ...props }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClick = (item) => {
    onClick(item);
    setOpen(false);
  };

  // detect if is on mobile
  const isMobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="dropdown">
      <button {...props} onClick={handleOpen}>
        {label}
        <ul className={`menu ${open ? "open" : ""} ${isMobile ? "mobile" : ""}`}>
          {items.map((child) => (
            <li key={child.id} className="menu-item" onClick={() => handleClick(child.value)}>
              {child.label}
            </li>
          ))}
        </ul>
      </button>
    </div>
  );
}

export default Dropdown;
