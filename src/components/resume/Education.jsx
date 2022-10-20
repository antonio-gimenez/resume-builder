import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import useResume from "../../hooks/useResume";
import Collapse from "../Collapse";
import { Input, TextArea } from "../ui";

function Education() {
  const { education, updateEducation, removeEducation } = useResume();
  const [nextId, setNextId] = useState(education.length > 0 ? education[education.length - 1].id + 1 : 0);

  useEffect(() => {
    setNextId(education.length > 0 ? education[education.length - 1].id + 1 : 0);
  }, [education]);

  const handleUpdateEducation = (e) => {
    const { id, name, value } = e.target;
    const educationId = parseInt(id);
    const study = education.find((study) => study.id === educationId);
    if (!study) {
      return console.error("No education found with id", educationId);
    }
    const updatedEducation = { ...study, [name]: value };
    updateEducation(updatedEducation);
  };

  return (
    <div className="container">
      <div className="flex">
        <div className="heading-2">Education</div>
        <div className=" add-new-entry" onClick={() => updateEducation({ id: nextId, name: "" })}>
          <PlusIcon className="icon" />
          <span>New Entry</span>
        </div>
      </div>
      {education.length > 0 ? (
        education.map((education) => (
          <Collapse key={education.id} open={true} title={education.name || "New Entry"}>
            <div className="flex-auto">
              <Input
                id={education.id}
                name="name"
                label="Specialization or Field of Study"
                defaultValue={education.name}
                placeholder="(e.g. Bachelor of Science in Computer Science, etc.)"
                onChange={handleUpdateEducation}
              />
              <Input
                type="number"
                id={education.id}
                name="from"
                min="1950"
                label="From"
                max={new Date().getFullYear()}
                placeholder="From"
                defaultValue={education.from}
                onChange={handleUpdateEducation}
              />
              <Input
                type="number"
                id={education.id}
                name="to"
                min="1950"
                label="To"
                max={new Date().getFullYear()}
                placeholder="To (or expected)"
                defaultValue={education.to}
                onChange={handleUpdateEducation}
              />
              <Input
                id={education.id}
                name="institution"
                label="Institution"
                placeholder="(e.g University of the Philippines, etc.)"
                defaultValue={education.institution}
                onChange={handleUpdateEducation}
              />
              <TextArea
                id={education.id}
                placeholder="A brief description or key takeaways from your education"
                name="description"
                label="Description"
                defaultValue={education.description}
                onChange={handleUpdateEducation}
              />
            </div>
            <div className="container-delete">
              <TrashIcon className="icon" onClick={() => removeEducation(education.id)} />
            </div>
          </Collapse>
        ))
      ) : (
        <div className="flex-auto">
          <p className="text-muted">No academical background yet.</p>
        </div>
      )}
    </div>
  );
}

export default Education;
