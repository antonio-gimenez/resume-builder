import React from "react";
import "./styles/App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import AppWrapper from "./components/layouts/AppWrapper";

function App() {
  return (
    <AppWrapper>
      <Header />
      <div className="scrollable-content">
        <div className=" container">
          <Editor />
        </div>
      </div>
    </AppWrapper>
  );
}

export default App;
