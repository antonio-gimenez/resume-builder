import React from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import useResume from "./hooks/useResume";
function App() {
  const { resume } = useResume();
  return (
    <div className="App">
      <Form />
      {/* <Preview data={resume} /> */}
    </div>
  );
}

export default App;
