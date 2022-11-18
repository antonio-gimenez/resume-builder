import React from "react";
import "./styles/App.css";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import AppWrapper from "./components/layouts/AppWrapper";

function App() {
  return (
    <AppWrapper>
      <Navbar />
      <div className="grid-columns-2">
        <div className="scrollable-content">
          <Editor />
        </div>
        <Preview />
        <div className="scroll-decoration" />
      </div>
    </AppWrapper>
  );
}

export default App;
