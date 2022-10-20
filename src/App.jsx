import React from "react";
import Preview from "./components/Preview";
import { Skills, PersonalDetails, Languages, Certifications, Education, Work } from "./components/resume";
import useResume from "./hooks/useResume";
import "./styles/App.css";

function App() {
  const { addCustomSection } = useResume();
  return (
    <div className="main">
      <div className="scrollable-container">
        <h1 className="heading-0">Resume Builder</h1>
        <div className="main-content">
          <PersonalDetails />
          <Skills />
          <Languages />
          <Certifications />
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
