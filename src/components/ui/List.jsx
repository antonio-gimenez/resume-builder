import React from "react";

function List({ children, orientation = "vertical", ...props }) {
  const style = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: orientation === "horizontal" ? "row" : "column",
    justifyContent: "space-between",
  };

  return (
    <ul {...props} style={style}>
      {children}
    </ul>
  );
}

export default List;
