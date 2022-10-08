import React from "react";
import { Container } from "./layouts";
import { ListItem, List, Progress, Title } from "./ui";
import { skills } from "../data.json";
function Skills() {
  return (
    <Container>
      <Title>Skills</Title>
      <List>
        {skills.map((skill) => (
          // if color is not defined, use the default color

          <ListItem key={skill.id}>
            <span>{skill.name}</span>
            <Progress backgroundColor={skill.color} progress={skill.progress} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Skills;
