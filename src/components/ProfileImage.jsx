import React, { useState } from "react";
import { getBase64 } from "../utils";
import useResume from "../hooks/useResume";
function ProfileImage() {
  const { profile, updateProfile } = useResume();
  const [image, setImage] = useState(null);
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

  const initials = profile.firstName[0] + profile.lastName[0];

  return (
    <div>
      <label className="label">Profile Photo</label>
      <label className="input-avatar">
        <input type="file" className="input-file" accept="image/*" onChange={handleImageChange} />
        {image ? (
          <img src={image} className={"image"} alt={"Profile Photo"} />
        ) : (
          <>
            <span className="initials">{initials}</span>
          </>
        )}
      </label>
    </div>
  );

  //   return <input className="avatar-input" type="file" onChange={(e) => handleImageChange(e)} name="avatar" />;
}

export default ProfileImage;
