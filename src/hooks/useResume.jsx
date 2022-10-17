import { isArray } from "../utils";
import useLocalStorage from "./useLocalStorage";

const initialState = require("../data.json");

function useResume() {
  const [resume, setResume] = useLocalStorage("resume", initialState);

  const updateResumeSection = (section, event) => {
    // If the section is an array, we need to update the array
    if (isArray(resume[section])) {
      const newArray = [...resume[section]];
      newArray[event.target.dataset.index][event.target.name] = event.target.value;
      setResume({ ...resume, [section]: newArray });
    } else {
      setResume({ ...resume, [section]: { ...resume[section], [event.target.name]: event.target.value } });
    }
  };

  const updateSkillProgress = (event) => {
    const { name, value } = event.target;
    if (!name || !value) return null;
    console.log(value);
    setResume((prev) => ({
      ...prev,
      skills: [
        ...prev.skills.map((skill) => {
          if (skill.id === name) {
            skill.progress = parseInt(value);
          }
          return skill;
        }),
      ],
    }));
  };

  const addSkill = (event) => {
    const { name, value } = event.target;
    if (!name || !value) return;
    // if id already exists, update name
    if (resume.skills.find((skill) => skill.id === name)) {
      setResume((prev) => ({
        ...prev,
        skills: [
          ...prev.skills.map((skill) => {
            if (skill.id === name) {
              skill.name = value;
            }
            return skill;
          }),
        ],
      }));
    } else {
      setResume((prev) => ({
        ...prev,
        skills: [
          ...prev.skills,
          {
            id: name,
            name: value,
            progress: 0,
          },
        ],
      }));
    }
  };

  const addExperience = (event) => {
    const { name, value } = event.target;
    if (!name || !value) return;
    // if id already exists, update name
    if (resume.work.find((exp) => exp.id === name)) {
      setResume((prev) => ({
        ...prev,
        work: [
          ...prev.work.map((exp) => {
            if (exp.id === name) {
              exp.name = value;
            }
            return exp;
          }),
        ],
      }));
    } else {
      setResume((prev) => ({
        ...prev,
        work: [
          ...prev.work,
          {
            id: name,
            position: value,
            from: "",
            to: "",
            company: "",
            description: "",
          },
        ],
      }));
    }
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
    updateResume: setResume,
    handleSkill: addSkill,
    updateSkillProgress,
    handleExperience: addExperience,
    restore: () => setResume(initialState),
  };
}

export default useResume;
