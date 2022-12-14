import React from "react";
import "./styles/App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import Preview from "./components/Preview";
import AppWrapper from "./components/layouts/AppWrapper";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <AppWrapper>
      <div className="scrollable-content">
        <Header />
        <Toolbar />
        <Editor />
        <div className="scroll-decoration" />
      </div>
      {/* <Preview /> */}
    </AppWrapper>
  );
}

export default App;
