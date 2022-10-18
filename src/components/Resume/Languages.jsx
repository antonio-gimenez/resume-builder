import React from "react";
import { Progress, ListItem, List } from "../ui";
function Languages({ data }) {
  if (!data) return null;
  return (
    <>
      <div className="heading-2">Languages</div>
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
