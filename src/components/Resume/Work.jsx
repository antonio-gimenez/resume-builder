import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import useResume from "../../hooks/useResume";
import { Input, TextArea } from "../ui";
function Work() {
  const { work, updateProfessionalExperience, removeProfessionalExperience } = useResume();
  const [nextId, setNextId] = useState(work.length > 0 ? work[work.length - 1].id + 1 : 0);
  useEffect(() => {
    setNextId(work.length > 0 ? work[work.length - 1].id + 1 : 0);
  }, [work]);
  const handleUpdateWork = (e) => {
    const { id, name, value } = e.target;
    const workId = parseInt(id);
    const work = work.find((work) => work.id === workId);
    const updatedWork = { ...work, [name]: value };
    updateProfessionalExperience(updatedWork);
  };

  return (
    <>
      <div className="heading-2">Professional Experience</div>
      <div>nextId={nextId}</div>
      <div>work={JSON.stringify(work)}</div>
      {work.map((work) => (
        <div
          style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}
          key={work.id}
        >
          <Input
            id={work.id}
            name="position"
            defaultValue={work.position}
            placeholder="Position (e.g. Software Engineer)"
            onChange={handleUpdateWork}
          />
          <Input
            type="number"
            id={work.id}
            name="from"
            min="1950"
            max={new Date().getFullYear()}
            placeholder="From"
            defaultValue={work.from}
            onChange={handleUpdateWork}
          />
          <Input
            type="number"
            id={work.id}
            name="to"
            min="1950"
            max={new Date().getFullYear()}
            placeholder="To (leave blank if still working here)"
            defaultValue={work.to}
            onChange={handleUpdateWork}
          />
          <Input
            id={work.id}
            name="company"
            defaultValue={work.company}
            placeholder="Company (e.g. Google)"
            onChange={handleUpdateWork}
          />
          <TrashIcon className="icon" onClick={() => removeProfessionalExperience(work.id)} />
          <TextArea
            id={work.id}
            name="description"
            defaultValue={work.description}
            placeholder="Description (e.g. Worked on the Google Search Engine)"
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
    </>
  );
}

export default Work;
