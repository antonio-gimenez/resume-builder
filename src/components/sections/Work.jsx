import React from "react";
import { List, ListItem, Title } from "../ui";
function Work({ work }) {
  if (!work) return null;
  return (
    <>
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
    </>
  );
}

export default Work;
