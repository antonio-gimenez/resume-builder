import React from "react";
import useResume from "../hooks/useResume";
import ColorPicker from "./ColorPicker";
import { Column, Container, Flex, Grid } from "./layouts";
import { Education, Work, Languages, Profile, Skills, Certificates } from "./sections";

function Preview({ data }) {
  const { resume, updateResumeSection } = useResume();

  const dinA4 = {
    position: "absolute",
    width: "794px",
    height: "1122px",
    minWidth: "794px",
    minHeight: "1122px",
    maxWidth: "794px",
    maxHeight: "1122px",
    backgroundColor: resume.pageSettings.backgroundColor || "white",
    transform: "scale(0.5)",
    transformOrigin: "top left",
    borderRadius: "0.5rem",
    padding: "0 2rem",
    marginTop: "1rem",
    boxShadow: "0 0 0 0.5rem rgb(101, 110, 131)",
    overflow: "hidden",
    overflowY: "scroll",
    left: "1rem",
    top: "0",
  };

  const insidePageStyle = {
    position: "relative",
    width: "auto",
    height: "auto",
    ...resume.pageSettings,
  };

  const onChangeColor = (e) => {
    updateResumeSection("pageSettings", e);
  };

  return (
    <Container className={"preview-container"}>
      <Container style={dinA4}>
        <div style={insidePageStyle}>
          {/* <Flex> */}
          <Profile {...data.profile} />
          <Grid columns={3}>
            <Column span={1}>
              <Skills skills={data.skills} />
              <Languages data={data.languages} />
              <Certificates data={data.certificates} />
            </Column>
            <Column span={2}>
              <Work data={data.work} />
              <Education data={data.education} />
            </Column>
          </Grid>
          {/* </Flex> */}
        </div>
      </Container>
      <div style={{ width: "auto", position: "absolute", right: "1rem", padding: 0, margin: 0 }}>
        <ColorPicker
          name="backgroundColor"
          currentColor={resume.pageSettings.backgroundColor}
          onChange={onChangeColor}
        />
      </div>
    </Container>
  );
}

export default Preview;
