import React from "react";
import { List, ListItem, Title } from "../ui";

function Education({ education }) {
  if (!education) return null;
  return (
    <>
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
    </>
  );
}

export default Education;
