import React from "react";
import useResume from "../hooks/useResume";
import { Progress } from "./ui";

function Page() {
  const { templateNumber, education, profile, skills, languages, certificates, professionalExperience } = useResume();
  return (
    <page id="preview" className={`page  template-${templateNumber}`}>
      <section className="template-body">
        <header className={`template-header`}>
          <div className="space-between flex flex-row">
            <span className="template-header-title">
              {profile.firstName} {profile.lastName}
            </span>
            {profile.avatar && <img className="template-avatar" src={profile.avatar} alt="avatar" />}
          </div>
        </header>

        <h4 className="preview-title">Profile</h4>
        <div className=" wrap-text flex flex-column">
          <a href={`mailto:${profile.email}`}> {profile.email}</a>
          <span>{profile.phone}</span>
          <span>{profile.address}</span>
          <span>{profile.state}</span>
          <span>{profile.city}</span>
          <a href={profile.website}>{profile.website}</a>
          <span>{profile.summary}</span>
        </div>

        {skills.length > 0 && (
          <>
            <h4 className="preview-title">Skills</h4>
            {skills.map((skill) => (
              <div key={skill.id} className="flex flex-column items-center">
                <span>{skill.name}</span>
                <Progress progress={skill.progress} />
              </div>
            ))}
          </>
        )}
        {languages.length > 0 && (
          <>
            <h4 className="preview-title">Languages</h4>
            <div className="">
              {languages.map((lang) => (
                <div key={lang.id} className="flex flex-column items-center">
                  <span>{lang.name}</span>
                  <Progress progress={lang.progress} />
                </div>
              ))}
            </div>
          </>
        )}
        {education.length > 0 && (
          <div className="section">
            <div className="section-header">
              <h2 className="heading-2">Education</h2>
            </div>
            <div className="section-content">
              {education.map((edu) => (
                <div key={edu.id} className="flex flex-row space-between">
                  <span>{edu.institution}</span>
                  <span>{edu.name}</span>
                  <span>
                    {edu.from} - {edu.to}
                  </span>
                  <span>{edu.description}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {certificates.length > 0 && (
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
        )}
        <div className="grid-auto">
          {professionalExperience.length > 0 && (
            <>
              <h2 className="preview-title">Professional Experience</h2>
              {professionalExperience.map((exp) => (
                <div key={exp.id} className="flex flex-row space-between">
                  <span>{exp.company}</span>
                  <span>{exp.position}</span>
                  <span>{exp.from}</span>
                  <span>{exp.to}</span>
                  <span>{exp.description}</span>
                </div>
              ))}
            </>
          )}
        </div>
        {/* </div> */}
      </section>
    </page>
  );
}

export default Page;
