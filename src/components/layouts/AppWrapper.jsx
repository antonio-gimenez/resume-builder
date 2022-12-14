import React from "react";
import useTheme from "../../hooks/useTheme";

function AppWrapper({ children, ...props }) {
  const { theme } = useTheme();

  return (
    <div className="app" data-theme={theme} {...props}>
      {children}
    </div>
  );
}

export default AppWrapper;
