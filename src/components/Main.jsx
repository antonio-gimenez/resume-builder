import React from "react";
import Drawer from "./Drawer";
import { Skills, PersonalDetails, Languages, Certifications, Education, Work } from "./resume";

function Main() {
  return (
    <div className="scrollable-container print-hide">
      <h1 className="heading-0">Resume Builder</h1>
      <div className="main-content">
        <Drawer />
        <PersonalDetails />
        <Skills />
        <Languages />
        <Certifications />
        <Education />
        <Work />
      </div>
      <div className="scrollable-container-fade" />
    </div>
  );
}

export default Main;
