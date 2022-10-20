import React from "react";
import useResume from "../hooks/useResume";
import Canvas from "./Canvas";
import { TextArea } from "./ui";

function Preview() {
  const { resume, updateResume } = useResume();

  return (
    <div className="resume-container">
      {/* <div className={"resume-preview"}> */}
      <Canvas />
      {/* <span role={"textbox"}>{JSON.stringify(resume, null, 2)}</span> */}
      {/* </div> */}
    </div>
  );
}

export default Preview;
