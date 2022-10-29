import React from "react";
import "./styles/App.css";
import Editor from "./components/Editor";
import Templates from "./components/Templates";

function App() {
  return (
    <>
      <nav role="navigation">
        <h2 className="heading-2">Resume builder</h2>
      </nav>
      <div className="App grid-column grid">
        <Editor />
        <Templates />
      </div>
    </>
  );
}

export default App;
