import React, { useRef } from "react";
import TemplateSelector from "./TemplateSelector";
import Page from "./Page";

function Preview() {
  return (
    <div className="preview-wrapper">
      <Page />
      <TemplateSelector />
    </div>
  );
}

export default Preview;
