import { isArray } from "../utils";
import useLocalStorage from "./useLocalStorage";

const initialState = require("../data.json");

function useResume() {
  const [resume, setResume] = useLocalStorage("resume", initialState);

  const { profile, skills, professionalExperience, education, languages, certificates } = resume;

  const updateResumeSection = (section, event) => {
    if (isArray(resume[section])) {
      const newArray = [...resume[section]];
      newArray[event.target.dataset.index][event.target.name] = event.target.value;
      setResume({ ...resume, [section]: newArray });
    } else {
      setResume({ ...resume, [section]: { ...resume[section], [event.target.name]: event.target.value } });
    }
  };

  const updateProfessionalExperience = (experience) => {
    if (!experience) return;
    const exisitingExperience = professionalExperience.find((exp) => exp.id === experience.id);
    if (exisitingExperience) {
      const newExperience = professionalExperience.map((exp) => (exp.id === experience.id ? experience : exp));
      return setResume({ ...resume, professionalExperience: newExperience });
    }
    setResume({ ...resume, professionalExperience: [...professionalExperience, experience] });
  };

  const removeProfessionalExperience = (id) => {
    if (isNaN(id)) {
      return console.error("No id provided or id is not a number");
    }
    if (!professionalExperience) {
      return console.error("No experience to remove");
    }
    setResume({ ...resume, professionalExperience: professionalExperience.filter((exp) => exp.id !== id) });
  };

  const updateEducation = (edu) => {
    if (!edu) return;
    const exisitingEducation = education.find((education) => education.id === edu.id);
    if (exisitingEducation) {
      const newEducation = education.map((education) => (education.id === edu.id ? edu : education));
      return setResume({ ...resume, education: newEducation });
    }
    setResume({ ...resume, education: [...education, edu] });
  };

  const removeEducation = (id) => {
    if (isNaN(id)) {
      return console.error("No id provided or id is not a number");
    }
    if (!education) {
      return console.error("No education to remove");
    }
    setResume({ ...resume, education: education.filter((education) => education.id !== id) });
  };

  const updateLanguage = (lang) => {
    if (!languages) return;
    lang.progress = parseInt(lang.progress);
    const existingLanguage = languages.find((language) => language.id === lang.id);
    if (existingLanguage) {
      const newLanguages = languages.map((language) => (language.id === lang.id ? lang : language));
      return setResume({ ...resume, languages: newLanguages });
    }
    setResume((prev) => ({ ...prev, languages: [...prev.languages, lang] }));
  };

  const removeLanguage = (id) => {
    if (isNaN(id)) {
      return console.error("No id provided or id is not a number");
    }
    if (!languages) {
      return console.error("No languages to remove");
    }
    setResume((prev) => ({ ...prev, languages: prev.languages.filter((lang) => lang.id !== id) }));
  };

  const updateCertificate = (cert) => {
    if (!cert) {
      return console.error("No certificate provided");
    }
    const exisitingCertificate = certificates.find((certificate) => certificate.id === cert.id);
    if (exisitingCertificate) {
      const newCertificates = certificates.map((certificate) => (certificate.id === cert.id ? cert : certificate));
      return setResume({ ...resume, certificates: newCertificates });
    }
    setResume((prev) => ({ ...prev, certificates: [...prev.certificates, cert] }));
  };

  const removeCertificate = (id) => {
    if (isNaN(id)) {
      return console.error("No id provided or id is not a number");
    }
    if (!certificates) {
      return console.error("No certificates to remove");
    }
    setResume((prev) => ({ ...prev, certificates: prev.certificates.filter((cert) => cert.id !== id) }));
  };

  const updateSkill = (skill) => {
    if (!skill) {
      return console.error("No skill provided");
    }
    // ensure that the skill progress is a number
    skill.progress = parseInt(skill.progress);
    const existingSkill = skills.find((s) => s.id === skill.id);
    if (existingSkill) {
      const newSkills = skills.map((s) => (s.id === skill.id ? skill : s));
      return setResume({ ...resume, skills: newSkills });
    }
    setResume((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }));
  };

  const removeSkill = (id) => {
    if (isNaN(id)) {
      return console.error("No id provided or id is not a number");
    }
    if (!skills) {
      return console.error("No skills found");
    }
    setResume((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill.id !== id),
    }));
  };

  return {
    resume,
    profile,
    skills,
    professionalExperience,
    education,
    languages,
    certificates,
    updateResumeSection,
    updateProfessionalExperience,
    removeProfessionalExperience,
    updateEducation,
    removeEducation,
    updateCertificate,
    removeCertificate,
    updateLanguage,
    removeLanguage,
    updateResume: setResume,
    removeSkill,
    updateSkill,
    restore: () => setResume(initialState),
  };
}

export default useResume;
