import React from "react";

function Menu({ items, open = true, onClick = () => {} }) {
  if (!items || !open) return null;
  // check if each item has an id, label, and value
  // if not, throw an error
  // items.forEach((item) => {
  //   if (!item.id) throw new Error("Menu item must have an id");
  //   if (!item.label) throw new Error("Menu item must have a label");
  //   if (!item.value) throw new Error("Menu item must have a value");
  // });
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
