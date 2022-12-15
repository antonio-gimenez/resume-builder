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

  return (
    <div className="dropdown">
      <button {...props} onClick={handleOpen}>
        {label}
      </button>
      <ul className={`menu ${open ? "open" : ""}`}>
        {items.map((child) => (
          <li key={child.id} className="menu-item" onClick={() => handleClick(child.value)}>
            {child.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
