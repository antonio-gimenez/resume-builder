import React from "react";
import "./styles/main.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import AppWrapper from "./components/layouts/AppWrapper";
import useTheme from "./hooks/useTheme";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  const { theme } = useTheme();
  const html = document.querySelector("html");
  if (html) {
    html.setAttribute("data-theme", theme);
  }
  return (
    <ModalProvider>
      <AppWrapper>
        <Header />
        <div className="scrollable-content">
          <div className=" container">
            <Editor />
          </div>
        </div>
      </AppWrapper>
    </ModalProvider>
  );
}

export default App;
