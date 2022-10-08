import React from "react";

function Grid({ children, columns = 2 }) {
  const style = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridGap: "1rem",
  };
  return <div style={style}>{children}</div>;
}

export default Grid;
