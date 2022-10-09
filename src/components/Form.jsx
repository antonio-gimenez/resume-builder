import { PlusIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import useResume from "../hooks/useResume";
import { Column, Container, Flex, Grid } from "./layouts";
import Preview from "./Preview";
import { Title, Input } from "./ui";

const style = {
  width: "auto",
  height: "auto",
  padding: "0rem",
};

function Form() {
  const { resume, updateResumeSection, handleSkill } = useResume();
  const [showPreview, setShowPreview] = useState(false);
  const fixed = {
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    width: "50%",
    height: "100%",
    backgroundColor: "rgb(101, 110, 131)",
  };

  return (
    <Container style={style}>
      <Grid>
        <Container style={fixed}>
          <Column>
            <Title h={1} customStyle={{ color: "#198ff0" }}>
              Resume Builder
            </Title>
            <Flex>
              <label htmlFor="show-preview">{showPreview ? "Hide" : "Show"} preview</label>
              <input
                id="show-preview"
                type="checkbox"
                value={showPreview}
                onChange={() => setShowPreview(!showPreview)}
              />
            </Flex>
            <Input placeholder={"Resume name"} label={"Resume name"} />
            <Title h={2}>Profile</Title>
            <Grid columns={2}>
              <Input
                placeholder={"ex: John"}
                label={"First Name"}
                value={resume.profile.firstName}
                onChange={(e) => updateResumeSection("profile", e)}
                name="firstName"
              />
              <Input
                placeholder={"ex: Doe"}
                label={"Last Name"}
                value={resume.profile.lastName}
                onChange={(e) => updateResumeSection("profile", e)}
                name="lastName"
              />
              <Input
                placeholder={"ex: john@doe.com"}
                label={"Email"}
                value={resume.profile.email}
                onChange={(e) => updateResumeSection("profile", e)}
                name="email"
              />
              <Input
                placeholder={"ex: 123-456-7890"}
                label={"Phone"}
                value={resume.profile.phone}
                onChange={(e) => updateResumeSection("profile", e)}
                name="phone"
              />
              <Input
                placeholder={"ex: New York"}
                label={"City"}
                value={resume.profile.city}
                onChange={(e) => updateResumeSection("profile", e)}
                name="city"
              />
              <Input
                placeholder={"ex: United States"}
                label={"State / Country"}
                value={resume.profile.state}
                onChange={(e) => updateResumeSection("profile", e)}
                name="state"
              />
              {/* <Input placeholder={"ex: www.johndoe.com"} label={"Website"} name="website" /> */}
            </Grid>
            <Title h={2}>Skills</Title>
            <Column>
              <Input placeholder={"ex: Leadership"} label={"Skill 1"} onChange={(e) => handleSkill(e)} name="skill" />
            </Column>
            <Column></Column>

            <Grid columns={2}></Grid>
          </Column>
        </Container>

        {showPreview && <Preview data={resume} />}
      </Grid>
    </Container>
  );
}

export default Form;
