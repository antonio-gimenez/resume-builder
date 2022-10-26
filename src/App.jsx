import React from "react";
import Preview from "./components/Preview";
import "./styles/App.css";
import Editor from "./components/Editor";

function App() {
  return (
    <div className="App">
      <Editor />
      <Preview />
    </div>
  );
}

export default App;
