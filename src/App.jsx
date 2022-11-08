import React from "react";
import "./styles/App.css";
import Editor from "./components/Editor";
import Templates from "./components/Templates";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";

function App() {
  return (
    <>
      <div className="print-hide">
        <Navbar />
        <div className="App grid-column grid">
          <Editor />

          <Templates />
        </div>
      </div>
      <Preview />
    </>
  );
}

export default App;
