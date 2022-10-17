import React, { useEffect } from "react";
import useResume from "../hooks/useResume";
import { downloadJsonFile } from "../utils";
import { Flex } from "./layouts";
import { Title, Input } from "./ui";
import Dropzone from "./ui/Dropzone";
import ToggleLevel from "./ui/ToggleLevel";

const initialState = require("../data.json");

function Form() {
  const { resume, updateResumeSection, handleSkill, updateSkillProgress, updateResume } = useResume();

  const fileName = `resume-${new Date().getTime()}.json`;

  return (
    <div style={{ maxWidth: "1200px" }}>
      <Title h={1} className={"accent"}>
        Resume Builder
      </Title>
      <Dropzone />
      <button
        onClick={() => {
          updateResume(initialState);
        }}
      >
        Set default values
      </button>
      <button onClick={() => downloadJsonFile(resume, fileName)}>Download json</button>
      <Title h={2}>Profile</Title>
      <Flex direction={"row"} space="2">
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
      </Flex>
      <Flex direction={"row"} space="2">
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
      </Flex>
      <Flex direction={"row"} space="2">
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
      </Flex>
      {/* <Input placeholder={"ex: www.johndoe.com"} label={"Website"} name="website" /> */}
      <Title h={2}>Skills</Title>
      <Flex direction={"row"} space="2">
        <Input
          placeholder={"ex: Leadership"}
          defaultValue={resume.skills[0].name}
          label={"Skill 1"}
          onBlur={(e) => handleSkill(e)}
          name="skill-1"
        />
        <ToggleLevel name="skill-1" currentProgress={resume.skills[0].progress} handleChange={updateSkillProgress} />
      </Flex>
      <Flex direction={"row"} space="2">
        <Input
          placeholder={"ex: Leadership"}
          label={"Skill 2"}
          defaultValue={resume.skills[1].name}
          onBlur={(e) => handleSkill(e)}
          name="skill-2"
        />
        <ToggleLevel name="skill-2" currentProgress={resume.skills[1].progress} handleChange={updateSkillProgress} />
      </Flex>
      <Flex direction={"row"} space="2">
        <Input
          placeholder={"ex: Leadership"}
          defaultValue={resume.skills[2].name}
          label={"Skill 3"}
          onBlur={(e) => handleSkill(e)}
          name="skill-3"
        />
        <ToggleLevel name="skill-3" currentProgress={resume.skills[2].progress} handleChange={updateSkillProgress} />
      </Flex>
      <Flex direction={"row"} space="2">
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
      </Flex>
      <Flex direction={"row"} space="2">
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
      </Flex>
    </div>
  );
}

export default Form;
