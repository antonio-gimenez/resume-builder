import { CheckCircleIcon, CloudArrowUpIcon, CloudIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import useResume from "../../hooks/useResume";

const fileNotUploaded = (
  <>
    <CloudIcon className="big-icon" />
    <div>
      <span className="dropzone-label-emphasis">Click or drag file</span>
      to this area to upload
    </div>
  </>
);

const dragOver = (
  <>
    <CloudArrowUpIcon className="big-icon" />
    <div>
      <span className="dropzone-label-emphasis">Release</span>
      to upload file
    </div>
  </>
);

const fileUploaded = (
  <>
    <CheckCircleIcon className="big-icon" />
    <div>
      <span className="dropzone-label-emphasis">File uploaded</span>
    </div>
  </>
);

function Dropzone() {
  const { updateResume } = useResume();
  const [label, setLabel] = useState(fileNotUploaded);
  const [isDragActive, setIsDragActive] = useState(false);
  const [isDragReleased, setIsDragReleased] = useState(false);
  const [fileName, setFileName] = useState("");
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
    setLabel(fileUploaded);
    setIsDragReleased(true);
    reader.readAsText(file);
    e.stopPropagation();
  };

  const onDrop = (e) => {
    e.preventDefault();
    uploadResume(e);
    setIsDragActive(false);
    setLabel(fileUploaded);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setIsDragActive(true);
    setLabel(dragOver);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    setIsDragActive(false);
    setLabel(fileNotUploaded);
  };

  return (
    <div
      className={isDragReleased ? "dropzone file-uploaded" : isDragActive ? "dropzone drag-over" : "dropzone"}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <label className="dropzone-file" htmlFor="dropzone-input">
        <div className="dropzone-label">{label}</div>
        <input type="file" accept="application/json,json" id="dropzone-input" onChange={uploadResume} />
      </label>
    </div>
  );
}

export default Dropzone;
