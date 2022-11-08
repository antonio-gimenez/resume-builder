import React from "react";
import "./styles/App.css";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import TemplateSelector from "./components/resume/TemplateSelector";
import AppWrapper from "./components/layouts/AppWrapper";

function App() {
  return (
    <>
      <Navbar />
      <AppWrapper>
        <Editor />
        <Preview />
        <TemplateSelector />
      </AppWrapper>
    </>
  );
}

export default App;
