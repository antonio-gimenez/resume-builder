import React from "react";
import { Button, UploadFile } from "./components/ui";
import useResume from "./hooks/useResume";
import { downloadJsonFile } from "./utils";

const initialState = require("./data.json");

function Header() {
  const { resume, updateResume } = useResume();
  const fileName = `resume-${new Date().getTime()}.json`;

  return (
    <div>
      <h1 className="heading-0">Resume Builder</h1>
      <Button
        onClick={() => {
          updateResume(initialState);
        }}
      >
        Set default
      </Button>
      <UploadFile />
      <Button onClick={() => downloadJsonFile(resume, fileName)}>Download json</Button>
    </div>
  );
}

export default Header;
