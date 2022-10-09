import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const initialState = require("../data.json");

function useResume() {
  const [resume, setResume] = useLocalStorage("resume", initialState);

  const updateResumeSection = (section, event) => {
    const { name, value } = event.target;
    console.log({ name, value, section });
    setResume((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value,
      },
    }));
  };

  const handleSkillChange = (event) => {
    const { name, value } = event.target;
    const skills = resume.skills.map((skill) => {
      if (skill.id === name) {
        return {
          ...skill,
          name: value,
        };
      }
      return skill;
    });
    setResume((prev) => ({
      ...prev,
      skills,
    }));
  };

  const updateResume = (data) => {
    setResume(data);
  };

  return {
    resume,
    profile: resume.profile,
    skills: resume.skills,
    work: resume.work,
    education: resume.education,
    languages: resume.languages,
    certificates: resume.certificates,
    updateResumeSection,
    updateResume,
    handleSkill: handleSkillChange,
    restore: () => setResume(initialState),
  };
}

export default useResume;
