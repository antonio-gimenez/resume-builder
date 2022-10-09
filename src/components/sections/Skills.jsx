import React from "react";
import { ListItem, List, Progress, Title } from "../ui";
function Skills({ skills }) {
  if (!skills) return null;
  return (
    <>
      <Title>Skills</Title>
      <List>
        {skills.map((skill) => (
          <ListItem key={skill.id}>
            <span>{skill.name}</span>
            <Progress backgroundColor={skill.color} progress={skill.progress} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Skills;
