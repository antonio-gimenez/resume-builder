import React, { useEffect, useState } from "react";
import useResume from "../../hooks/useResume";
import Card, { CardActions, CardContent, CardHeader } from "../Card";
import Collapse from "../Collapse";
import Modal, { ModalActions, ModalContent, ModalHeader } from "../Modal";
import { Button, Input, TextArea } from "../ui";
function Work() {
  const { professionalExperience, updateProfessionalExperience, removeProfessionalExperience } = useResume();
  const [nextId, setNextId] = useState(
    professionalExperience.length > 0 ? professionalExperience[professionalExperience.length - 1].id + 1 : 0
  );
  useEffect(() => {
    setNextId(professionalExperience.length > 0 ? professionalExperience[professionalExperience.length - 1].id + 1 : 0);
  }, [professionalExperience]);

  const [isModalOpen, setModalOpen] = useState({});

  function handleModal(id) {
    setModalOpen({
      [id]: !isModalOpen[id] ? true : false,
    });
  }

  const handleUpdateWork = (e) => {
    const { id, name, value } = e.target;
    const experienceId = parseInt(id);
    console.log({ id, name, value, experienceId });
    const work = professionalExperience.find((work) => work.id === experienceId);
    if (!work) return console.error("work not found");
    const updatedWork = { ...work, [name]: value };
    updateProfessionalExperience(updatedWork);
  };

  const workTitle = (work) => {
    if (work.company && work.position) {
      return `${work.position} at ${work.company}`;
    }
    if (work.company) {
      return work.company;
    }
    if (work.position) {
      return work.position;
    }

    return "(Not specified)";
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="card-title">Experience</h2>
        <Button
          color={"blue"}
          onClick={() =>
            updateProfessionalExperience({ id: nextId, position: "", from: "", to: "", company: "", description: "" })
          }
        >
          Add Experience
        </Button>
      </CardHeader>
      <CardContent>
        {professionalExperience.length > 0 ? (
          professionalExperience.map((work) => (
            <Collapse key={work.id} open={!work.position || !work.company} title={workTitle(work)}>
              <div>
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

                <TextArea
                  id={work.id}
                  label="Description"
                  name="description"
                  defaultValue={work.description}
                  placeholder={`Main responsibilities, achievements, a brief description of key projects, etc.`}
                  onChange={handleUpdateWork}
                />
              </div>
              <CardActions>
                <Button color={"red"} onClick={() => handleModal(work.id)}>
                  Delete
                </Button>
                <Modal open={isModalOpen[work.id]}>
                  <ModalHeader>Delete Entry</ModalHeader>
                  <ModalContent>
                    <p>Are you sure you want to delete this entry?</p>
                  </ModalContent>
                  <ModalActions>
                    <Button
                      color={"blue"}
                      onClick={() => {
                        removeProfessionalExperience(work.id);
                        handleModal(work.id);
                      }}
                    >
                      Confirm
                    </Button>
                    <Button onClick={() => handleModal(work.id)}>Cancel</Button>
                  </ModalActions>
                </Modal>
              </CardActions>
            </Collapse>
          ))
        ) : (
          <div>
            <p className="text-muted">No work experience added yet.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default Work;
