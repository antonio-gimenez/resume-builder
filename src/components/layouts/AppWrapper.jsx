import React from "react";
import useTheme from "../../hooks/useTheme";

function AppWrapper({ children, ...props }) {
  const { theme } = useTheme();

  return (
    <main className="app" data-theme={theme} {...props}>
      {children}
    </main>
  );
}

export default AppWrapper;
