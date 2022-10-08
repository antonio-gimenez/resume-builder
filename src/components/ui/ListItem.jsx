import React from "react";

function ListItem({ children, ...props }) {
  const style = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "column",
  };
  return (
    <li {...props} style={style}>
      {children}
    </li>
  );
}

export default ListItem;
