import React from "react";

function Column({ children, span = 1 }) {
  const style = {
    gridColumn: `span ${span} / 1`,
  };

  return <div style={style}>{children}</div>;
}

export default Column;
