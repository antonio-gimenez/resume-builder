import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import useResume from "../../hooks/useResume";
import { Container } from "../layouts";
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
    <>
      <div className="heading-2">Education</div>
      <div>nextId={nextId}</div>
      <div>education={JSON.stringify(education)}</div>
      <Container style={{ marginTop: "2rem" }}>
        {education.map((education) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              // justifyContent: "center",
              margin: "1rem",
              flexWrap: "wrap",
            }}
            key={education.id}
          >
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
            <TrashIcon className="icon" onClick={() => removeEducation(education.id)} />
            <TextArea
              id={education.id}
              placeholder="A brief description or key takeaways from your education"
              name="description"
              label="Description"
              defaultValue={education.description}
              onChange={handleUpdateEducation}
            />
          </div>
        ))}
      </Container>
      <span className="link" role={"link"} onClick={() => updateEducation({ id: nextId, name: "" })}>
        Add new education
      </span>
    </>
  );
}

export default Education;
