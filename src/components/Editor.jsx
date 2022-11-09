import React from "react";
import { Certifications, Education, Languages, PersonalDetails, Skills, Work } from "./resume";

function Editor() {
  return (
    <div className="editor print-hide">
      <div className="section-list">
        <PersonalDetails />
        <Skills />
        <Languages />
        <Certifications />
        <Education />
        <Work />
      </div>
    </div>
  );
}

export default Editor;
