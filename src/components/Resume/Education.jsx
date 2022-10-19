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
    const education = education.find((education) => education.id === educationId);
    const updatedEducation = { ...education, [name]: value };
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
              defaultValue={education.name}
              placeholder="Specialization and Field of Study (e.g. Computer Science, Software Engineering)"
              onChange={handleUpdateEducation}
            />
            <Input
              type="number"
              id={education.id}
              name="from"
              min="1950"
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
              max={new Date().getFullYear()}
              placeholder="To (or expected)"
              defaultValue={education.to}
              onChange={handleUpdateEducation}
            />
            <Input
              id={education.id}
              name="institution"
              placeholder="Institution"
              defaultValue={education.institution}
              onChange={handleUpdateEducation}
            />
            <TrashIcon className="icon" onClick={() => removeEducation(education.id)} />
            <TextArea
              id={education.id}
              placeholder="Description"
              name="description"
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
