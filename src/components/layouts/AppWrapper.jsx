import React from "react";

function AppWrapper({ children }) {
  return (
    <main className="app app-layout">
      <div className="scrollable-content">{children}</div>
    </main>
  );
}

export default AppWrapper;
