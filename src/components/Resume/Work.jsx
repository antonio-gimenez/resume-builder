import React from "react";
import { List, ListItem } from "../ui";
function Work({ data }) {
  if (!data) return null;
  return (
    <>
      <div className="heading-2">Professional Experience</div>
      <List>
        {data.map((item) => (
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
