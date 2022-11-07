import React from "react";
import useResume from "../hooks/useResume";
import TemplateSelector from "./resume/TemplateSelector";

function Templates() {
  return (
    <div>
      <h1>Templates</h1>
      <div className="grid grid-auto">
        <TemplateSelector />
      </div>
    </div>
  );
}

export default Templates;
