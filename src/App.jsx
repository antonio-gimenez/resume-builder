import React from "react";
import "./styles/App.css";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import AppWrapper from "./components/layouts/AppWrapper";
import Tabs from "./components/Tab";

function App() {
  return (
    <Tabs>
      <span>Preview</span>
      <span>Tab 2</span>
      <span>Tab 3</span>
    </Tabs>
    // <AppWrapper>
    //   <div className="scrollable-content">
    //     <Navbar />
    //     <Editor />
    //     <div className="scroll-decoration" />
    //   </div>
    //   <Preview />
    // </AppWrapper>
  );
}

export default App;
