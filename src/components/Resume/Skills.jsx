import React from "react";
import { ListItem, List, Progress } from "../ui";
function Skills({ skills }) {
  if (!skills) return null;
  return (
    <>
      <div className="heading-2">Skills</div>
      <List>
        {skills.map((skill) => (
          <ListItem key={skill.id}>
            <span>{skill.name}</span>
            <Progress progress={skill.progress} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Skills;
