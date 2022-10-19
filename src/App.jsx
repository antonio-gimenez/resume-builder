import React from "react";
import Preview from "./components/Preview";
import { Skills, PersonalDetails, Languages, Certificates, Education, Work } from "./components/resume";
import "./styles/App.css";

function App() {
  return (
    <div className="main">
      <div className="scrollable-container">
        <h1 className="heading-0">Resume Builder</h1>
        <div className="main-content">
          <PersonalDetails />
          <Skills />
          <Languages />
          <Certificates />
          <Education />
          <Work />
        </div>
        <div className="scrollable-container-fade" />
      </div>
      <div className="preview-container">
        <Preview />
      </div>
    </div>
  );
}

export default App;
