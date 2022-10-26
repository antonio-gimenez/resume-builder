import React, { useState } from "react";
import { getBase64 } from "../utils";
import useResume from "../hooks/useResume";
import { PhotoIcon } from "@heroicons/react/24/outline";
function ProfileImage() {
  const { profile, updateProfile } = useResume();
  const [image, setImage] = useState(profile.avatar || null);
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
    <div>
      <label className="label">Profile Photo</label>
      <label className="input-avatar">
        <input type="file" className="hide-input-file" accept="image/*" onChange={handleImageChange} />
        {image ? (
          <img src={image} className={"image"} alt={"Profile Photo"} />
        ) : (
          <PhotoIcon className={"placeholder"} />
        )}
      </label>
    </div>
  );

  //   return <input className="avatar-input" type="file" onChange={(e) => handleImageChange(e)} name="avatar" />;
}

export default ProfileImage;
