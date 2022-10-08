import React from "react";
import { Container } from "./layouts";
import { List, ListItem, Title } from "./ui";
import { work } from "../data.json";
function ProfessionalExperience() {
  return (
    <Container>
      <Title>Professional Experience</Title>
      <List>
        {work.map((item) => (
          <ListItem key={item.id}>
            <span>
              {item.from} - {item.to}
            </span>
            <span>
              {item.position} at {item.company}
            </span>
            <p dangerouslySetInnerHTML={{ __html: item.summary }}></p>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ProfessionalExperience;
