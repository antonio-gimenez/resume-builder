import React from "react";
function AppWrapper({ children, ...props }) {
  return (
    <main className="app" {...props}>
      {children}
    </main>
  );
}

export default AppWrapper;
