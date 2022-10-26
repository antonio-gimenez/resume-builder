import React, { useState } from "react";
import useResume from "../hooks/useResume";
import { findLabelProgress } from "../utils";
import Progress from "./ui/Progress";
function Preview() {
  const { resume } = useResume();

  return (
    <div className={"preview-container print-hide"}>
      <div className={"din-A4"}>
        <div className="print-show">
          <div className="template-header">
            <div className="heading">
              <h1 className="heading-2">{`${resume.profile.firstName} ${resume.profile.lastName}`}</h1>
              {resume.profile.avatar ? <img className="avatar" src={resume.profile.avatar} alt="profile" /> : null}
            </div>
            <p className="summary">{resume.profile.summary}</p>
            <address className="address">
              <span>{resume.profile.phone}</span>
              <span>{resume.profile.email}</span>
              <span>
                {resume.profile.city}, {resume.profile.state}, {resume.profile.country}
              </span>
              <span>{resume.profile.website}</span>
            </address>
          </div>

          <div className="columns-2">
            <section className="column">
              <div>
                <h2 className="heading-2">{resume.sectionTitles["education"] || "Education"}</h2>
                <ul className="preview-list">
                  {resume.education.map((edu) => (
                    <li key={edu.id}>
                      <span>{edu.name}</span>
                      <span>{edu.institution}</span>
                      <span>{edu.to}</span>
                      <span>{edu.from}</span>
                      <span>{edu.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="heading-2">{resume.sectionTitles["experience"] || "Experience"}</h2>
                <ul className="preview-list">
                  {resume.professionalExperience.map((job) => (
                    <li key={job.id}>
                      <span>{job.position}</span>
                      <span>{job.company}</span>
                      <span>{job.to}</span>
                      <span>{job.from}</span>
                      <span>{job.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="column">
              <div>
                <h2 className="heading-2">{resume.sectionTitles["skills"] || "Skills"}</h2>
                <ul className="grid-auto">
                  {resume.skills.map((skill) => (
                    <li key={skill.id}>
                      <div className="flex-auto">
                        <span>{skill.name}</span>
                        <span>{findLabelProgress(skill.progress, "skills")}</span>
                      </div>
                      <Progress progress={skill.progress} />
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="heading-2">{resume.sectionTitles["languages"] || "Languages"}</h2>
                <ul className="grid-auto">
                  {resume.languages.map((lang) => (
                    <li key={lang.id}>
                      <div className="flex-auto">
                        <span>{lang.name}</span>
                        <span>{findLabelProgress(lang.progress, "languages")}</span>
                      </div>
                      <Progress progress={lang.progress} />
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="heading-2">{resume.sectionTitles["certifications"] || "Certificates"}</h2>

                <ul className="preview-list">
                  {resume.certificates.map((cert) => (
                    <li key={cert.id}>
                      <span>{cert.name}</span>
                      <span>{cert.date}</span>
                      <span>{cert.issuer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
