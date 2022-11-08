import React from "react";

import TemplateSelector from "./resume/TemplateSelector";

function Templates() {
  return (
    <div className="print-hide">
      <h1>Templates</h1>
      <div className="grid-auto grid">
        <TemplateSelector />
      </div>
    </div>
  );
}

export default Templates;
