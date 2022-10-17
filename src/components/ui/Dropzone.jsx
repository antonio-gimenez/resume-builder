import React, { useState } from "react";
import useResume from "../../hooks/useResume";

const initialLabel = "Click or Drag and drop your file here";

function Dropzone() {
  const { updateResume } = useResume();
  const [label, setLabel] = useState(initialLabel);
  const [isDragActive, setIsDragActive] = useState(false);

  const uploadResume = (e) => {
    e.preventDefault();
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (file.type !== "application/json") {
      alert("Only JSON files are supported");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const resume = JSON.parse(e.target.result);
      updateResume(resume);
    };
    reader.readAsText(file);
    e.stopPropagation();
  };

  const handleDropFile = (e) => {
    e.preventDefault();
    uploadResume(e);
    e.stopPropagation();
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragActive(true);
    setLabel("Drop your file here");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragActive(false);
    setLabel(initialLabel);
  };

  return (
    <div
      className={isDragActive ? "dropzone active" : "dropzone"}
      onDragLeave={handleDragLeave}
      onDragOver={onDragOver}
      onDrop={handleDropFile}
    >
      <label className="dropzone-file" htmlFor="dropzone-input">
        <p className="dropzone-label">{label}</p>
        <input type="file" accept="application/json,json" id="dropzone-input" onChange={uploadResume} />
      </label>
    </div>
  );
}

export default Dropzone;
