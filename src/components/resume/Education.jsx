import React, { useEffect, useState } from "react";
import useResume from "../../hooks/useResume";
import Card, { CardActions, CardContent, CardHeader } from "../Card";
import Collapse from "../Collapse";
import Modal, { ModalActions, ModalContent, ModalHeader } from "../Modal";
import { Button, Input, TextArea } from "../ui";

function Education() {
  const { education, updateEducation, removeEducation } = useResume();
  const [nextId, setNextId] = useState(education.length > 0 ? education[education.length - 1].id + 1 : 0);

  const [isModalOpen, setModalOpen] = useState({});

  function handleModal(id) {
    setModalOpen({
      [id]: !isModalOpen[id] ? true : false,
    });
  }

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
    <Card>
      <CardHeader>
        <h2 className="card-title">Education</h2>
        <Button color={"blue"} onClick={() => updateEducation({ id: nextId, name: "" })}>
          Add Education
        </Button>
      </CardHeader>
      <CardContent>
        {education.length > 0 ? (
          education.map((education) => (
            <Collapse key={education.id} open={!education.name} title={education.name || "(Not specified)"}>
              <div className="container">
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
              <CardActions>
                <Button color={"red"} onClick={() => handleModal(education.id)}>
                  Delete
                </Button>
                <Modal open={isModalOpen[education.id]}>
                  <ModalHeader>Delete Entry</ModalHeader>
                  <ModalContent>
                    <p>Are you sure you want to delete this entry?</p>
                  </ModalContent>
                  <ModalActions>
                    <Button
                      onClick={() => {
                        removeEducation(education.id);
                        handleModal(education.id);
                      }}
                    >
                      Confirm
                    </Button>
                    <Button color={"blue"} block onClick={() => handleModal(education.id)}>
                      Cancel
                    </Button>
                  </ModalActions>
                </Modal>
              </CardActions>
            </Collapse>
          ))
        ) : (
          <div className="container">
            <p className="text-muted">No academical background yet.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default Education;
