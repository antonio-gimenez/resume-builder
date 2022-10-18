import React from "react";
import { List, ListItem } from "../ui";

function Education({ data }) {
  if (!data) return null;
  return (
    <>
      <div className="heading-2">Education</div>

      <List>
        {data.map((item) => (
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
