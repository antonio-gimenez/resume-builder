import React from "react";
import "./styles/App.css";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import AppWrapper from "./components/layouts/AppWrapper";

function App() {
  return (
    <AppWrapper>
      <div className="print-hide">
        <Navbar />
      </div>
      <div className="scrollable-content">
        <Editor />
        <Preview />
        <div className="scroll-decoration" />
      </div>
    </AppWrapper>
  );
}

export default App;
