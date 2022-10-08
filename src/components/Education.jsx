import React from "react";
import { education } from "../data.json";
import { Container } from "./layouts";
import { List, ListItem, Title } from "./ui";

function Education() {
  return (
    <Container className="Container">
      <Title>Education</Title>

      <List>
        {education.map((item) => (
          <ListItem key={item.id}>
            <h3>
              {item.from} - {item.to}
            </h3>
            <span>
              {item.name} at {item.institution}
            </span>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Education;
