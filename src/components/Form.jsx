import React from "react";
import useResume from "../hooks/useResume";
import { downloadJsonFile } from "../utils";
import { Container, Flex } from "./layouts";
import { UploadFile, Button } from "./ui";

const initialState = require("../data.json");

function Form() {
  const { resume, updateResumeSection, handleSkill, updateSkillProgress, updateResume } = useResume();

  const fileName = `resume-${new Date().getTime()}.json`;

  return (
    <Container style={{ margin: "0 auto", maxWidth: "1200px" }}>
      <Container style={{ maxWidth: "200px" }}>
        <UploadFile />
      </Container>

      <Button
        onClick={() => {
          updateResume(initialState);
        }}
      >
        Set default values
      </Button>
      <Button onClick={() => downloadJsonFile(resume, fileName)}>Download json</Button>
    </Container>
  );
}

export default Form;
