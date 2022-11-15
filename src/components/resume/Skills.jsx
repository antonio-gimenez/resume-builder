import React, { useEffect, useState } from "react";
import useResume from "../../hooks/useResume";
import { Card, CardActions, CardContent, CardHeader } from "../Card";
import Collapse from "../Collapse";
import Modal, { ModalHeader } from "../Modal";

import { Input } from "../ui";
import Range from "../ui/Range";

function Skills() {
  const { skills, updateSkill, removeSkill } = useResume();
  const [nextId, setNextId] = useState(skills.length > 0 ? skills[skills.length - 1].id + 1 : 0);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    <Card rounded>
      <CardHeader>
        <span className="heading-2">Skills</span>
        <div className="button" onClick={() => updateSkill({ id: nextId, name: "", progress: 0 })}>
          <span>Add Skill</span>
        </div>
      </CardHeader>
      <CardContent>
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <Collapse key={skill.id} open={!skill.name} title={skill.name || "New Skill"}>
              <div className="flex-auto">
                <Input
                  id={skill.id}
                  label={`Skill #${index + 1}`}
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
              </div>
              <CardActions>
                <span className="button delete" onClick={() => setIsModalOpen(true)}>
                  Delete this entry
                </span>
                <Modal open={isModalOpen}>
                  <ModalHeader>
                    <h2 className="heading-2">Delete Skill</h2>
                  </ModalHeader>
                </Modal>
                {/* <span className="button delete" onClick={() => removeSkill(skill.id)}>
                  Delete this entry
                </span> */}
              </CardActions>
            </Collapse>
          ))
        ) : (
          <div className="flex-auto">
            <p className="text-muted">No skills added yet.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default Skills;
