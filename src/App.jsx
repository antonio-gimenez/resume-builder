import React from "react";
import "./styles/App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import AppWrapper from "./components/layouts/AppWrapper";
import useTheme from "./hooks/useTheme";
import { Menu } from "./components/ui";

function App() {
  const { theme } = useTheme();
  const html = document.querySelector("html");
  if (html) {
    html.setAttribute("data-theme", theme);
  }
  return (
    <AppWrapper>
      <Header />
      <div className="scrollable-content">
        <div className=" container">
          <Menu
            items={[
              { label: "File", value: "File" },
              { label: "Edit", value: "Edit" },
            ]}
          />
          <Editor />
        </div>
      </div>
    </AppWrapper>
  );
}

export default App;
