import React, { useEffect, useState } from "react";
import { ReactComponent as DropdownIcon } from "../../assets/icons/chevron-down.svg";
function Dropdown({ label, items, onClick = () => {}, colorSelected, ...props }) {
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

  // useEffect(() => {
  //   // get the dropdown offset from top
  //   if (!isMobile) return;
  //   const dropdown = document.querySelector(".dropdown");
  //   const menu = document.querySelector("#menu");
  //   // get the offset from top
  //   const offset = dropdown.offsetTop;
  //   console.log(offset);

  //   // set the menu top position to the offset + 25px
  //   menu.style.top = `${offset}px`;

  //   // get the dropdown width
  //   const width = dropdown.offsetWidth;

  //   // set the menu left position the center of the dropdown
  //   menu.style.right = `${width}px`;
  // }, [open]);

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
      <button {...props} className="dropdown-label" onClick={handleOpen}>
        {label}
        <DropdownIcon />
      </button>
      <ul id={"menu"} className={`menu ${open ? "open" : ""}`}>
        {items.map((child) => (
          <li
            key={child.id}
            className={`menu-item ${colorSelected && child.active ? "is-selected" : ""}`}
            onClick={() => handleClick(child.value)}
          >
            {child.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
