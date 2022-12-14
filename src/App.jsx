import React from "react";
import "./styles/App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import AppWrapper from "./components/layouts/AppWrapper";

function App() {
  return (
    <AppWrapper>
      <div className="scrollable-content">
        <Header />
        <Editor />
        <div className="scroll-decoration" />
      </div>
    </AppWrapper>
  );
}

export default App;
