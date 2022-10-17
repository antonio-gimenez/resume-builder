import React from "react";
import { Container } from "../layouts";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, LinkIcon } from "@heroicons/react/24/outline";
import { List, ListItem } from "../ui";
function Profile({ firstName, lastName, email, phone, state, city, website }) {
  const styleIcon = {
    width: "24px",
    height: "24px",
    marginRight: "0.25rem",
    color: "rgb(28, 40, 59)",
  };

  return (
    <Container>
      <h1>{firstName + " " + lastName}</h1>
      <List orientation="horizontal">
        <ListItem>
          <MapPinIcon style={styleIcon} />
          {city}, {state}
        </ListItem>
        <ListItem>
          <PhoneIcon style={styleIcon} />
          {phone}
        </ListItem>
        <ListItem>
          <EnvelopeIcon style={styleIcon} />
          <a target="_blank" rel="noopener noreferrer" href={`mailto:${email}`}>
            {email}
          </a>
        </ListItem>
        <ListItem>
          <LinkIcon style={styleIcon} />
          <a target="_blank" rel="noopener noreferrer" href={website}>
            {website}
          </a>
        </ListItem>
      </List>
    </Container>
  );
}

export default Profile;
