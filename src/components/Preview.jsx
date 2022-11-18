import React, { useRef } from "react";
import TemplateSelector from "./TemplateSelector";
import useResume from "../hooks/useResume";
import { Progress } from "./ui";
import Card from "./Card";

function Preview() {
  const { templateNumber, profile, skills, languages, certificates, professionalExperience } = useResume();

  const previewRef = useRef(null);

  return (
    <div className="preview-wrapper">
      <div className="fle lex-column">
        <div id="preview" ref={previewRef} className={`page template-${templateNumber}`}>
          <section className="template-body ">
            <header className={`template-header`}>
              <div className="space-between flex flex-row">
                <span className="template-header-title">
                  {profile.firstName} {profile.lastName}
                </span>
                {profile.avatar && <img className="template-avatar" src={profile.avatar} alt="avatar" />}
              </div>
            </header>

            <div className="card-list">
              <div className="grid">
                <div className="section">
                  <div className="section-header">
                    <h2 className="heading-2">Profile</h2>
                  </div>
                  <div className="section-content wrap-text flex flex-column">
                    <a href={`mailto:${profile.email}`}> {profile.email}</a>
                    <span>{profile.phone}</span>
                    <span>{profile.address}</span>
                    <span>{profile.state}</span>
                    <span>{profile.city}</span>
                    <a href={profile.website}>{profile.website}</a>
                    <span>{profile.summary}</span>
                  </div>
                </div>
              </div>
              <div className="grid-auto">
                <div className="section">
                  <div className="section-header">
                    <h2 className="heading-2">Skills</h2>
                  </div>
                  <div className="section-content">
                    {skills.map((skill) => (
                      <div key={skill.id} className="flex flex-column">
                        <span>{skill.name}</span>
                        <Progress progress={skill.progress} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="section">
                  <div className="section-header">
                    <h2 className="heading-2">Languages</h2>
                  </div>
                  <div className="section-content">
                    {languages.map((lang) => (
                      <div key={lang.id} className="flex flex-column">
                        <span>{lang.name}</span>
                        <Progress progress={lang.progress} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-auto">
                <div className="section">
                  <div className="section-header">
                    <h2 className="heading-2">Certificates</h2>
                  </div>
                  <div className="section-content">
                    {certificates.map((certificate) => (
                      <div key={certificate.id} className="flex flex-row gap">
                        <span>{certificate.name}</span>
                        <span>{certificate.year}</span>
                        <span>{certificate.issuer}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid-auto">
                <div className="section">
                  <div className="section-header">
                    <h2 className="heading-2">Experience</h2>
                  </div>
                  <div className="section-content">
                    {professionalExperience.map((exp) => (
                      <div key={exp.id} className="flex flex-column">
                        <span>{exp.company}</span>
                        <span>{exp.position}</span>
                        <span>{exp.from}</span>
                        <span>{exp.to}</span>
                        <span>{exp.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <TemplateSelector />
      </div>
    </div>
  );
}

export default Preview;
