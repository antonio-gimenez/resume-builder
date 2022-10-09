import React from "react";
import { Container } from "./components/layouts";
import Form from "./components/Form";
function App() {
  return (
    <Container customStyle={{ maxWidth: "1200px" }}>
      <Form />
    </Container>
  );
}

export default App;
