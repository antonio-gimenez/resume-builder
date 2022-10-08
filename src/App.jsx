import React from "react";
import Header from "./components/Header";
import Languages from "./components/Languages";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Education from "./components/Education";
import { Grid, Column, Container } from "./components/layouts";

function App() {
  return (
    <Container maxWidth={1200}>
      <Header />
      <Grid columns={3}>
        <Column span={1}>
          <Skills />
          <Languages />
          <Certifications />
        </Column>
        <Column span={2}>
          <ProfessionalExperience />
          <Education />
        </Column>
      </Grid>
    </Container>
  );
}

export default App;
