import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    // get the dropdown offset from top
    if (!isMobile) return;
    const dropdown = document.querySelector(".dropdown");
    const menu = document.querySelector("#menu");
    // get the offset from top
    const offset = dropdown.offsetTop;
    console.log(offset);

    // set the menu top position to the offset + 25px
    menu.style.top = `${offset}px`;

    // get the dropdown width
    const width = dropdown.offsetWidth;

    // set the menu left position the center of the dropdown
    menu.style.right = `${width}px`;
  }, [open]);

  // if click outside the dropdown, close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && !event.target.closest(".dropdown")) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (open && event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div className="dropdown">
      <button {...props} onClick={handleOpen}>
        {label}
        <ul id={"menu"} className={`menu ${open ? "open" : ""}`}>
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
