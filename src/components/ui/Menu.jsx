import React from "react";

function Menu({ items, open, onClick = () => {} }) {
  return (
    <ul id={"menu"} className={`menu ${open ? "open" : ""}`}>
      {items.map((child) => (
        <li
          key={child.id}
          className={`menu-item ${child.active ? "is-selected" : ""}`}
          onClick={() => onClick(child.value)}
        >
          {child.label}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
