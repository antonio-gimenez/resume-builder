import React from "react";
import useColorScheme from "../../hooks/useColorScheme";

function AppWrapper({ children, ...props }) {
  const { colorScheme } = useColorScheme();
  return (
    <main className="app" data-theme={colorScheme} {...props}>
      {children}
    </main>
  );
}

export default AppWrapper;
