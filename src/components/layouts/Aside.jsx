import React from "react";

function Aside({ children }) {
  return (
    <aside role={"navigation"} className="aside">
      <nav className="aside-nav">{children}</nav>
    </aside>
  );
}

export default Aside;
