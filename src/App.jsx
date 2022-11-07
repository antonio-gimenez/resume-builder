import React from "react";
import "./styles/App.css";
import Editor from "./components/Editor";
import Templates from "./components/Templates";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="App grid-column grid">
        <Editor />
        <Templates />
      </div>
    </>
  );
}

export default App;
