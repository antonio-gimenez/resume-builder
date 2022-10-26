import React from "react";
import { Certifications, Education, Languages, PersonalDetails, Skills, Work } from "./resume";

function Editor() {
  return (
    <div className="editor print-hide">
      <h1 className="title">Resume Builder</h1>
      <div className="container">
        <PersonalDetails />
        <Skills />
        <Languages />
        <Certifications />
        <Education />
        <Work />
      </div>
      <div className="scroll-decoration" />
    </div>
  );
}

export default Editor;
