import React from "react";
import useColorScheme from "../../hooks/useColorScheme";

function AppWrapper({ children, ...props }) {
  const { colorScheme } = useColorScheme();
  return (
    <div className="app" data-theme={colorScheme} {...props}>
      {children}
    </div>
  );
}

export default AppWrapper;
