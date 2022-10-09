import React from "react";
import { Title, Progress, ListItem, List } from "../ui";
function Languages({ languages }) {
  if (!languages) return null;
  return (
    <>
      <Title>Languages</Title>
      <List>
        {languages.map((language) => (
          <ListItem key={language.id}>
            <span>
              {language.name} - {language.level}
            </span>
            <Progress backgroundColor={language.color} progress={language.progress} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Languages;
