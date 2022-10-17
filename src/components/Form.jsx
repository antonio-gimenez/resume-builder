import React from "react";
import useResume from "../hooks/useResume";
import { downloadJsonFile } from "../utils";
import Collapse from "./Collapse";
import { Column, Container, Grid } from "./layouts";
import NewSkill from "./NewSkill";
import Preview from "./Preview";
import { Title, Input } from "./ui";
import ToggleLevel from "./ui/ToggleLevel";

const initialState = require("../data.json");

function Form() {
  const { resume, updateResumeSection, handleSkill, updateSkillProgress, updateResume } = useResume();

  return (
    <Container>
      <Grid>
        <Container className={"form-fixed"}>
          <Column>
            <Title h={1} className={"accent"}>
              Resume Builder
            </Title>
            <button
              onClick={() => {
                updateResume(initialState);
              }}
            >
              Set default values
            </button>
            <button onClick={() => downloadJsonFile(resume, resume.profile.firstName + "-" + resume.profile.lastName)}>
              Download json
            </button>
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
            <NewSkill />
            <Grid columns={2}>
              <Input
                placeholder={"ex: Leadership"}
                defaultValue={resume.skills[0].name}
                label={"Skill 1"}
                onBlur={(e) => handleSkill(e)}
                name="skill-1"
              />
              <ToggleLevel
                name="skill-1"
                currentProgress={resume.skills[0].progress}
                handleChange={updateSkillProgress}
              />
              <Input
                placeholder={"ex: Leadership"}
                label={"Skill 2"}
                defaultValue={resume.skills[1].name}
                onBlur={(e) => handleSkill(e)}
                name="skill-2"
              />
              <ToggleLevel
                name="skill-2"
                currentProgress={resume.skills[1].progress}
                handleChange={updateSkillProgress}
              />
              <Input
                placeholder={"ex: Leadership"}
                defaultValue={resume.skills[2].name}
                label={"Skill 3"}
                onBlur={(e) => handleSkill(e)}
                name="skill-3"
              />
              <ToggleLevel
                name="skill-3"
                currentProgress={resume.skills[2].progress}
                handleChange={updateSkillProgress}
              />
            </Grid>
            <Grid columns={2}>
              <Input
                placeholder="Position"
                label="Position 1"
                value={resume.work[0].position}
                onChange={(e) => updateResumeSection("work", e)}
                name="work-1"
              />
              <Input
                placeholder="Company"
                label="Company 1"
                value={resume.work[0].company}
                onChange={(e) => updateResumeSection("work", e)}
                name="company-1"
              />
              <Input
                placeholder="Start Date"
                label="Start Date 1"
                value={resume.work[0].startDate}
                onChange={(e) => updateResumeSection("work", e)}
                name="startDate-1"
              />
              <Input
                placeholder="End Date"
                label="End Date 1"
                value={resume.work[0].endDate}
                onChange={(e) => updateResumeSection("experience", e)}
                name="endDate-1"
              />
            </Grid>
          </Column>
          <div className="bordered-container">
            <Collapse title="Exmaple of coallpse" open={false}>
              HOLACARACOLA
            </Collapse>
          </div>
        </Container>

        {/* {showPreview && <Preview data={resume} />} */}
        <Preview data={resume} />
      </Grid>
    </Container>
  );
}

export default Form;
