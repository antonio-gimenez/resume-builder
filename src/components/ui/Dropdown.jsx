import React, { useRef, useState } from "react";
import { ReactComponent as DropdownIcon } from "../../assets/icons/chevron-down-20.svg";
import useKeyPress from "../../hooks/useKeyPress";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import Menu from "./Menu";
function Dropdown({ label, items, onClick = () => {}, showSelectedItemAsLabel, ...props }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  useOnClickOutside({ ref: dropdownRef, handler: () => setOpen(false) });
  useKeyPress({ key: "Escape", handler: () => setOpen(false) });
  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClick = (item) => {
    onClick(item);
    setOpen(false);
  };

  const labelFromSelectedItem = () => {
    const item = items.find((item) => item.active);
    return item ? item.label : label;
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button {...props} onClick={handleOpen}>
        <span>{showSelectedItemAsLabel ? labelFromSelectedItem() : label}</span>
        <DropdownIcon className="dropdown-icon" />
      </button>
      <Menu items={items} open={open} onClick={handleClick} />
    </div>
  );
}

export default Dropdown;
