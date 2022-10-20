import React from "react";
import useResume from "../../hooks/useResume";
import { Input } from "../ui";

function PersonalDetails() {
  const { profile, updateResumeSection } = useResume();

  return (
    <div className="container">
      <h1 className="heading-2">Personal Details</h1>
      <div className="container-bordered grid-auto">
        <Input
          placeholder={"ex: John"}
          label={"First Name"}
          value={profile.firstName}
          onChange={(e) => updateResumeSection("profile", e)}
          name="firstName"
        />
        <Input
          placeholder={"ex: Doe"}
          label={"Last Name"}
          value={profile.lastName}
          onChange={(e) => updateResumeSection("profile", e)}
          name="lastName"
        />

        <Input
          placeholder={"ex: john@doe.com"}
          label={"Email"}
          value={profile.email}
          onChange={(e) => updateResumeSection("profile", e)}
          name="email"
        />
        <Input
          placeholder={"ex: 123-456-7890"}
          label={"Phone"}
          value={profile.phone}
          onChange={(e) => updateResumeSection("profile", e)}
          name="phone"
        />

        <Input
          placeholder={"ex: New York"}
          label={"City"}
          value={profile.city}
          onChange={(e) => updateResumeSection("profile", e)}
          name="city"
        />
        <Input
          placeholder={"ex: United States"}
          label={"State / Country"}
          value={profile.state}
          onChange={(e) => updateResumeSection("profile", e)}
          name="state"
        />
      </div>
    </div>
  );
}

export default PersonalDetails;
