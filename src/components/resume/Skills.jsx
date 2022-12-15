import React, { useEffect, useState } from "react";
import useResume from "../../hooks/useResume";
import Collapse from "../Collapse";
import Card, { CardActions, CardContent, CardHeader } from "../Card";
import Modal, { ModalActions, ModalContent, ModalHeader } from "../Modal";
import { Button, Input } from "../ui";
import Range from "../ui/Range";

function Skills() {
  const { skills, updateSkill, removeSkill } = useResume();
  const [nextId, setNextId] = useState(skills.length > 0 ? skills[skills.length - 1].id + 1 : 0);

  const [isModalOpen, setModalOpen] = useState({});

  function handleModal(id) {
    setModalOpen({
      [id]: !isModalOpen[id] ? true : false,
    });
  }

  useEffect(() => {
    setNextId(skills.length > 0 ? skills[skills.length - 1].id + 1 : 0);
  }, [skills]);

  const handleUpdateSkill = (e) => {
    const { id, name, value } = e.target;
    const skillId = parseInt(id);
    const skill = skills.find((skill) => skill.id === skillId);
    const updatedSkill = { ...skill, [name]: value };
    updateSkill(updatedSkill);
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="card-title">Skills</h2>
        <Button color={"blue"} onClick={() => updateSkill({ id: nextId, name: "", progress: 0 })}>
          Add Skill
        </Button>
      </CardHeader>
      <CardContent>
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <Collapse key={skill.id} open={!skill.name} title={skill.name || "(Not specified)"}>
              <Input
                id={skill.id}
                label={`Proficency`}
                name="name"
                defaultValue={skill.name}
                placeholder="(e.g. React, JavaScript, etc.)"
                onChange={handleUpdateSkill}
              />
              <Range
                levelType="skills"
                disabled={!skill.name}
                id={skill.id}
                name={"progress"}
                currentProgress={skill.progress || 5}
                handleChange={handleUpdateSkill}
              />
              <CardActions>
                <Button color={"red"} onClick={() => handleModal(skill.id)}>
                  Delete
                </Button>
                <Modal open={isModalOpen[skill.id]}>
                  <ModalHeader>Delete Entry</ModalHeader>
                  <ModalContent>
                    <p>Are you sure you want to delete this entry?</p>
                  </ModalContent>
                  <ModalActions>
                    <Button
                      onClick={() => {
                        removeSkill(skill.id);
                        handleModal(skill.id);
                      }}
                    >
                      Confirm
                    </Button>
                    <Button color={"blue"} onClick={() => handleModal(skill.id)}>
                      Cancel
                    </Button>
                  </ModalActions>
                </Modal>
              </CardActions>
            </Collapse>
          ))
        ) : (
          <div>
            <p className="text-muted">No skills added yet.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default Skills;
