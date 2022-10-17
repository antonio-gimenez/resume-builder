import React from "react";
import { Title, Progress, ListItem, List } from "../ui";
function Languages({ data }) {
  if (!data) return null;
  return (
    <>
      <Title>Languages</Title>
      <List>
        {data.map((language) => (
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
