import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import useResume from "../../hooks/useResume";
import { Input, TextArea } from "../ui";
function Work() {
  const { professionalExperience, updateProfessionalExperience, removeProfessionalExperience } = useResume();
  const [nextId, setNextId] = useState(
    professionalExperience.length > 0 ? professionalExperience[professionalExperience.length - 1].id + 1 : 0
  );
  useEffect(() => {
    setNextId(professionalExperience.length > 0 ? professionalExperience[professionalExperience.length - 1].id + 1 : 0);
  }, [professionalExperience]);

  const handleUpdateWork = (e) => {
    const { id, name, value } = e.target;
    const experienceId = parseInt(id);
    console.log({ id, name, value, experienceId });
    const work = professionalExperience.find((work) => work.id === experienceId);
    if (!work) return console.error("work not found");
    const updatedWork = { ...work, [name]: value };
    updateProfessionalExperience(updatedWork);
  };

  return (
    <div className="container">
      <div className="heading-2">Professional Experience</div>
      {professionalExperience.map((work) => (
        <div
          style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}
          key={work.id}
        >
          <Input
            id={work.id}
            name="position"
            label="Position"
            defaultValue={work.position}
            placeholder="(e.g. Software Engineer)"
            onChange={handleUpdateWork}
          />
          <Input
            type="number"
            id={work.id}
            name="from"
            min="1950"
            label="From"
            max={new Date().getFullYear()}
            defaultValue={work.from}
            onChange={handleUpdateWork}
          />
          <Input
            type="number"
            id={work.id}
            name="to"
            min="1950"
            label="To"
            max={new Date().getFullYear()}
            placeholder="Leave blank if still working here"
            defaultValue={work.to}
            onChange={handleUpdateWork}
          />
          <Input
            id={work.id}
            name="company"
            defaultValue={work.company}
            label="Company"
            placeholder="(e.g. Google)"
            onChange={handleUpdateWork}
          />
          <TrashIcon className="icon" onClick={() => removeProfessionalExperience(work.id)} />
          <TextArea
            id={work.id}
            name="description"
            defaultValue={work.description}
            placeholder={`Main responsibilities, achievements, a brief description of key projects, etc.`}
            onChange={handleUpdateWork}
          />
        </div>
      ))}

      <span
        className="link"
        role={"link"}
        onClick={() =>
          updateProfessionalExperience({ id: nextId, position: "", from: "", to: "", company: "", description: "" })
        }
      >
        Add new education
      </span>
    </div>
  );
}

export default Work;
