import { isNumber } from "../utils";
import useLocalStorage from "./useLocalStorage";

const initialState = require("../data.json");

function useResume() {
  const [resume, setResume] = useLocalStorage("resume", initialState);

  const {
    profile,
    skills,
    professionalExperience,
    education,
    languages,
    certificates,
    sectionTitles,
    customSettings,
    // sectionsOrder,
  } = resume;

  // const changeSectionsOrder = (section, index) => {
  //   const newSectionsOrder = [...sectionsOrder];
  //   newSectionsOrder.splice(index, 1);
  //   newSectionsOrder.splice(section.index, 0, section.id);
  //   setResume({ ...resume, sectionsOrder: newSectionsOrder });
  // };

  const updateProfile = (event) => {
    if (!event || !event.target) {
      return console.error("No event or event.target provided");
    }
    const { name, value } = event.target;
    console.log({ name, value });
    const exisitingField = profile[name];
    if (exisitingField) {
      return setResume({ ...resume, profile: { ...profile, [name]: value } });
    }
    setResume({ ...resume, profile: { ...profile, [name]: value } });
  };

  const updateTemplate = (templateNumber) => {
    if (!isNumber) {
      return console.error("No template number provided or is not a number");
    }
    setResume({ ...resume, customSettings: { ...customSettings, templateNumber: templateNumber } });
  };

  const updateTitles = (event) => {
    if (!event || !event.target) {
      return console.error("No event or event.target provided");
    }
    const { name, value } = event.target;

    if (!name) {
      return console.error("No name provided");
    }
    console.log({ name, value });
    const exisitingField = Boolean(sectionTitles[name]);
    if (!exisitingField) {
      const newTitles = { ...sectionTitles, [name]: value };
      return setResume({ ...resume, sectionTitles: newTitles });
    }
    // update existing field
    const newTitles = { ...sectionTitles, [name]: value };
    return setResume({ ...resume, sectionTitles: newTitles });
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
    lang.progress = parseInt(lang.progress) || 1;
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
      const newCertifications = certificates.map((certificate) => (certificate.id === cert.id ? cert : certificate));
      return setResume({ ...resume, certificates: newCertifications });
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
    sectionTitles,
    updateProfile,
    updateProfessionalExperience,
    removeProfessionalExperience,
    updateEducation,
    removeEducation,
    updateCertificate,
    removeCertificate,
    updateLanguage,
    removeLanguage,
    updateTitles,
    updateResume: setResume,
    removeSkill,
    updateSkill,
    updateTemplate,
    templateNumber: customSettings.templateNumber || 0,
    restore: () => setResume(initialState),
  };
}

export default useResume;
