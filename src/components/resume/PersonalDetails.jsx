import React from "react";
import useResume from "../../hooks/useResume";
import Card from "../Card/Card";
import ProfileImage from "../ProfileImage";

import { Input, TextArea } from "../ui";

function PersonalDetails() {
  const { profile, updateProfile } = useResume();

  return (
    <Card title="Personal Details">
      <div className="grid-auto flex-auto">
        <Input
          placeholder={"ex: John"}
          label={"First Name"}
          value={profile.firstName}
          onChange={(e) => updateProfile(e)}
          name="firstName"
        />
        <Input
          placeholder={"ex: Doe"}
          label={"Last Name"}
          value={profile.lastName}
          onChange={(e) => updateProfile(e)}
          name="lastName"
        />
        <ProfileImage />

        <Input
          placeholder={"ex: john@doe.com"}
          label={"Email"}
          value={profile.email}
          onChange={(e) => updateProfile(e)}
          name="email"
        />
        <Input
          placeholder={"ex: 123-456-7890"}
          label={"Phone"}
          value={profile.phone}
          onChange={(e) => updateProfile(e)}
          name="phone"
        />

        <Input
          placeholder={"ex: New York"}
          label={"City"}
          value={profile.city}
          onChange={(e) => updateProfile(e)}
          name="city"
        />
        <Input
          placeholder={"ex: United States"}
          label={"State / Country"}
          value={profile.state}
          onChange={(e) => updateProfile(e)}
          name="state"
        />
        <TextArea label={"Summary"} value={profile.summary} onChange={(e) => updateProfile(e)} name="summary" />
      </div>
    </Card>
  );
}

export default PersonalDetails;
