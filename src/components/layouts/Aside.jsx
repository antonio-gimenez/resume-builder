import React from "react";

function Aside({ children }) {
  return (
    <aside role={"navigation"} className="aside">
      {children}
    </aside>
  );
}

export default Aside;
