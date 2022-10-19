import React from "react";
import { Skills, PersonalDetails, Languages, Certificates, Education, Work } from "./components/resume";
import { Button, UploadFile } from "./components/ui";
import useResume from "./hooks/useResume";
import "./styles/App.css";
import { downloadJsonFile } from "./utils";

const initialState = require("./data.json");

function App() {
  const { resume, updateResume } = useResume();

  const fileName = `resume-${new Date().getTime()}.json`;
  return (
    <div className="laptop-fit">
      <Button
        onClick={() => {
          updateResume(initialState);
        }}
      >
        Set default
      </Button>
      <UploadFile />
      <Button onClick={() => downloadJsonFile(resume, fileName)}>Download json</Button>

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
