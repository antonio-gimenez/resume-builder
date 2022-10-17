import React from "react";

function Flex({
  children,
  direction = "column",
  alignItems = "center",
  justifyContent = "space-between",
  space = 0,
  ...props
}) {
  const style = {
    display: "flex",
    flexDirection: direction,
    alignItems,
    justifyContent,
    gap: `${space}rem`,
  };

  return (
    <div {...props} style={style}>
      {children}
    </div>
  );
}

export default Flex;
