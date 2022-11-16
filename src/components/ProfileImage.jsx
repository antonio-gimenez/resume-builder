import React, { useState } from "react";
import { getBase64 } from "../utils";
import useResume from "../hooks/useResume";
import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline";
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

  const removeImage = () => {
    setImage(null);
    const newEvent = {
      target: {
        name: "avatar",
        value: null,
      },
    };
    updateProfile(newEvent);
  };

  return (
    <div className="inline">
      <label className="avatar" htmlFor="avatar">
        <input type="file" className="hide-input" id={"avatar"} accept="image/*" onChange={handleImageChange} />

        {image ? (
          <img src={image} className={"profile-photo"} alt={"profile-photo"} />
        ) : (
          <div className="placeholder">
            <div className="figure">64x64</div>
          </div>
        )}
      </label>
      <div className="status">{image ? <span onClick={() => removeImage()}>Remove</span> : <span>Upload</span>}</div>
    </div>
  );
}

export default ProfileImage;
