import React from "react";
import useResume from "../../hooks/useResume";
import { getBase64 } from "../../utils";
import { Input, TextArea } from "../ui";

function PersonalDetails() {
  const { profile, updateProfile } = useResume();
  // base64 image
  const [image, setImage] = React.useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    getBase64(file).then((base64) => {
      setImage(base64);
      const newEvent = {
        ...event,
        target: {
          ...event.target,
          name: "avatar",
          value: base64,
        },
      };
      updateProfile(newEvent);
    });
  };

  return (
    <div className="container">
      <h1 className="heading-2">Personal Details</h1>
      <div className="grid-auto container flex-auto">
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
        <Input type="file" label={"Profile Picture"} onChange={(e) => handleImageChange(e)} name="avatar" />
      </div>
    </div>
  );
}

export default PersonalDetails;
