import React, { useReducer } from "react";
import "./styles/main.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import AppWrapper from "./components/layouts/AppWrapper";
import useTheme from "./hooks/useTheme";
import { ModalProvider } from "./contexts/ModalContext";
import reducer from "./reducers/resumeReducer";

import initialState from "./data2.json";
import { Input } from "./components/ui";

function App() {
  const { theme } = useTheme();
  const html = document.querySelector("html");
  if (html) {
    html.setAttribute("data-theme", theme);
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (event) => {
    dispatch({
      type: "updateNestedField",
      payload: {
        objectName: "personal_info",
        field: "name",
        value: event.target.value,
      },
    });
  };
  const handleSkillChange = (event) => {
    dispatch({
      type: "updateField",
      payload: {
        field: "name",
        id: event.target.id,
        value: event.target.value,
      },
    });
  };
  return (
    <ModalProvider>
      <AppWrapper>
        <Header />
        <div className="scrollable-content">
          {/* <div className=" container"> */}
          {/* <Editor /> */}
          {/* </div> */}
          {JSON.stringify(state)}
          <Input id="name" label="Name" defaultValue={state.personal_info.name || ""} onChange={handleChange} />
          {state.skills.map((skill) => (
            <div key={skill.id}>
              <Input
                key={skill.id}
                id={skill.id}
                label={`Proficency`}
                name="name"
                defaultValue={skill.name}
                placeholder="(e.g. React, JavaScript, etc.)"
                onChange={handleSkillChange}
              />
            </div>
          ))}
        </div>
      </AppWrapper>
    </ModalProvider>
  );
}

export default App;
