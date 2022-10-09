import React from "react";

function Flex({ children, direction = "column", ...props }) {
  const style = {
    display: "flex",
    flexDirection: direction,
  };

  return <div style={style}>{children}</div>;
}

export default Flex;
