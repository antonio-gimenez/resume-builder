import React, { useEffect, useRef } from "react";

import useResume from "../hooks/useResume";

function Preview() {
  const { templateNumber, profile } = useResume();
  //  set a trigger with useEffect
  const previewRef = useRef(null);

  // ussing useEffect and useRef to scale the preview to fit the page when the window is resized or the template is changed
  useEffect(() => {
    const preview = previewRef.current;
    const scale = Math.min(preview.offsetWidth / 800, preview.offsetHeight / 1000);
    preview.style.transform = `scale(${scale})`;
  }, [templateNumber]);

  return (
    <div className="wrapper">
      <section id="preview" ref={previewRef} className={`page template-${templateNumber}`}>
        <div className="template-body ">
          <div className={`template-header `}>
            <div className="space-between flex flex-row">
              <span className="template-header-title">
                {profile.firstName} {profile.lastName}
              </span>
              {profile.avatar && <img className="template-avatar" src={profile.avatar} alt="avatar" />}
            </div>
          </div>
          <div className="template-header-personal-info flex-auto">
            <a href={`mailto:${profile.email}`}> {profile.email}</a>
            <span>{profile.phone}</span>
            <span>{profile.address}</span>
            <span>{profile.state}</span>
            <span>{profile.city}</span>
            <a href={profile.website}>{profile.website}</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Preview;
