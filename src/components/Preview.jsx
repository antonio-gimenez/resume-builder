import React from "react";
import useResume from "../hooks/useResume";
import { findLabelProgress } from "../utils";
import Progress from "./ui/Progress";

function Preview() {
  const { resume } = useResume();

  return (
    <div className={"preview-container"}>
      <div className={"resume-preview"}>
        <div>
          <div className="preview-profile container-bordered">
            <h1 className="heading-2">{`${resume.profile.firstName} ${resume.profile.lastName}`}</h1>
            <address className="preview-address">
              <span>{resume.profile.city}</span>
              <span>{resume.profile.phone}</span>
              <span>{resume.profile.email}</span>
              <span>{resume.profile.state}</span>
            </address>
          </div>
          <div className="preview-education container-bordered">
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
          <div className="preview-work container-bordered">
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
          <div className="preview-certifications container-bordered">
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
          <div className="preview-skills container-bordered">
            <h2 className="heading-2">{resume.sectionTitles["skills"] || "Skills"}</h2>
            <ul className="preview-list">
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
          <div className="preview-languages container-bordered">
            <h2 className="heading-2">{resume.sectionTitles["languages"] || "Languages"}</h2>
            <ul className="preview-list">
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
        </div>
      </div>
    </div>
  );
}

export default Preview;
