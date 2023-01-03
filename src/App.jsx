import React from "react";
import "./styles/main.css";
import Header from "./components/Header";
import AppWrapper from "./components/layouts/AppWrapper";
import useTheme from "./hooks/useTheme";
import { ModalProvider } from "./contexts/ModalContext";
import Form from "./components/Form";

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
          <Form />
        </div>
      </AppWrapper>
    </ModalProvider>
  );
}

export default App;
