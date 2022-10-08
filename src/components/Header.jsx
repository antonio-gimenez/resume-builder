import React from "react";
import { profile } from "../data.json";
import { Container } from "./layouts";
import { MapPinIcon, PhoneIcon, EnvelopeIcon, LinkIcon } from "@heroicons/react/24/outline";
import { List, ListItem } from "./ui";
function Header() {
  const styleIcon = {
    width: "24px",
    height: "24px",
    marginRight: "0.25rem",
    color: "rgb(28, 40, 59)",
  };

  return (
    <Container
      customStyle={{
        marginTop: "1rem",
        marginBottom: "1rem",
      }}
    >
      <h1 className="header-name">{profile.name}</h1>
      <List orientation="horizontal">
        <ListItem>
          <MapPinIcon style={styleIcon} />
          {profile.city}, {profile.state}
        </ListItem>
        <ListItem>
          <PhoneIcon style={styleIcon} />
          {profile.phone}
        </ListItem>
        <ListItem>
          <EnvelopeIcon style={styleIcon} />
          <a target="_blank" rel="noopener noreferrer" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </ListItem>
        <ListItem>
          <LinkIcon style={styleIcon} />
          <a target="_blank" rel="noopener noreferrer" href={profile.website}>
            {profile.website}
          </a>
        </ListItem>
      </List>
    </Container>
  );
}

export default Header;
