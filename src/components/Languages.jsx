import React from "react";
import { Container } from "./layouts";
import { Title, Progress, ListItem, List } from "./ui";
import { languages } from "../data.json";
function Languages() {
  return (
    <Container>
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
    </Container>
  );
}

export default Languages;
