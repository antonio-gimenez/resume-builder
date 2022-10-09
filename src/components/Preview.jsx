import React from "react";
import useResume from "../hooks/useResume";
import ColorPicker from "./ColorPicker";
import { Container, Flex } from "./layouts";
import { Education, Work, Languages, Profile, Skills, Certificates } from "./sections";

function Preview({ data }) {
  const { resume, updateResumeSection } = useResume();
  const container = {
    backgroundColor: "rgb(101, 110, 131)",
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    width: "50%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

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
    // marginLeft: "auto",
    // marginRight: "auto",
    boxShadow: "0 0 0 0.5rem rgb(101, 110, 131)",
    left: "1rem",
    // right: "0",
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
    <Container customStyle={container}>
      <Container customStyle={dinA4}>
        <div style={insidePageStyle}>
          <Flex>
            <Profile {...data.profile} />
          </Flex>
          <Work data={data.work} />
          <Education data={data.education} />
          <Languages data={data.languages} />
          <Skills data={data.skills} />
          <Certificates data={data.certificates} />
        </div>
      </Container>
      <div style={{ width: "auto", position: "absolute", right: "1rem", padding: 0, margin: 0 }}>
        <ColorPicker
          name="backgroundColor"
          currentColor={resume.pageSettings.backgroundColor}
          onChange={onChangeColor}
        />
        {/* <ColorPicker name="color" currentColor={data.pageSettings.color} onChange={onChangeColor} /> */}
      </div>
    </Container>
  );
}

export default Preview;
