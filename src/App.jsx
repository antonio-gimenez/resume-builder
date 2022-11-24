import React from "react";
import "./styles/App.css";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import AppWrapper from "./components/layouts/AppWrapper";

function App() {
  return (
    <AppWrapper>
      <div className="scrollable-content">
        <Navbar />
        <Editor />
        <div className="scroll-decoration" />
      </div>
      <Preview />
    </AppWrapper>
  );
}

export default App;
