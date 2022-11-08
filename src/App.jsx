import React from "react";
import "./styles/App.css";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import TemplateSelector from "./components/resume/TemplateSelector";
import AppWrapper from "./components/layouts/AppWrapper";
import Aside from "./components/layouts/Aside";

function App() {
  return (
    <>
      <div className="print-hide">
        <Navbar />
      </div>

      <AppWrapper>
        <div className="print-hide">
          <Editor />
        </div>
        <Preview />
        <div className="print-hide">
          <Aside>
            <TemplateSelector />
          </Aside>
        </div>
      </AppWrapper>
    </>
  );
}

export default App;
