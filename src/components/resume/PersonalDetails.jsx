import React from "react";
import useResume from "../../hooks/useResume";
import { CardContent, CardHeader } from "../Card";
import Card from "../Card/Card";

import { Input, TextArea } from "../ui";

function PersonalDetails() {
  const { profile, updateProfile } = useResume();

  return (
    <Card>
      <CardHeader>
        <h2 className="card-title">Personal Details</h2>
      </CardHeader>
      <CardContent>
        <form className="form-grid">
          <Input
            id="firstName"
            placeholder={"ex: John"}
            label={"First Name"}
            value={profile.firstName}
            onChange={(e) => updateProfile(e)}
            name="firstName"
          />
          <Input
            id="lastName"
            placeholder={"ex: Doe"}
            label={"Last Name"}
            value={profile.lastName}
            onChange={(e) => updateProfile(e)}
            name="lastName"
          />
          <Input
            id="email"
            placeholder={"ex: john@doe.com"}
            label={"Email"}
            value={profile.email}
            onChange={(e) => updateProfile(e)}
            name="email"
          />
          <Input
            id="phone"
            placeholder={"ex: 123-456-7890"}
            label={"Phone"}
            value={profile.phone}
            onChange={(e) => updateProfile(e)}
            name="phone"
          />

          <Input
            id="city"
            placeholder={"ex: New York"}
            label={"City"}
            value={profile.city}
            onChange={(e) => updateProfile(e)}
            name="city"
          />
          <Input
            id="state"
            placeholder={"ex: United States"}
            label={"State / Country"}
            value={profile.state}
            onChange={(e) => updateProfile(e)}
            name="state"
          />
        </form>
        <TextArea
          id="summary"
          label={"Summary (optional)"}
          value={profile.summary}
          onChange={(e) => updateProfile(e)}
          name="summary"
        />
      </CardContent>
    </Card>
  );
}

export default PersonalDetails;
