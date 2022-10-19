import React, { useState } from "react";
import useResume from "../../hooks/useResume";
import InputFile from "./InputFile";

function UploadFile({ method = "input" }) {
  const { updateResume } = useResume();
  const [fileName, setFileName] = useState(null);
  const uploadResume = (e) => {
    e.preventDefault();
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (file.type !== "application/json") {
      alert("Only JSON files are supported");
      return;
    }
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      const resume = JSON.parse(e.target.result);
      updateResume(resume);
    };
    reader.readAsText(file);
    e.stopPropagation();
  };

  // if file is uploaded add a button to remove it
  const removeFile = () => {
    setFileName("");
  };

  return (
    <div className="upload-file">
      <InputFile
        type="file"
        label={fileName || "Upload file"}
        accept="application/json,json"
        id="upload-input"
        disabled={fileName !== null}
        onChange={uploadResume}
      />
    </div>
  );
}

export default UploadFile;
