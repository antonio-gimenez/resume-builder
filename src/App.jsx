import React from "react";
import { Skills, PersonalDetails, Languages, Certificates, Education, Work } from "./components/resume";
import { Button } from "./components/ui";
import useResume from "./hooks/useResume";
import "./styles/App.css";

const initialState = require("./data.json");

function App() {
  const { updateResume } = useResume();

  return (
    <div className="laptop-fit">
      <Button
        onClick={() => {
          updateResume(initialState);
        }}
      >
        Set default
      </Button>
      <h1 className="heading-0">Resume Builder</h1>
      <PersonalDetails />
      <Skills />
      <Languages />
      <Certificates />
      <Education />
      <Work />
    </div>
  );
}

export default App;
