import React, { useEffect, useState } from "react";
import useResume from "../../hooks/useResume";
import Collapse from "../Collapse";
import Card, { CardContent, CardHeader, CardActions } from "../Card";
import PopupModal from "../ui/PopupModal";
import { Button, Input } from "../ui";
import Range from "../ui/Range";
import Switch from "../ui/Switch";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

function Skills() {
  const { skills, updateSkill, removeSkill } = useResume();
  const [nextId, setNextId] = useState(skills.length > 0 ? skills[skills.length - 1].id + 1 : 0);
  const [showSkillLevel, setShowSkillLevel] = useState(false);

  const { closeModal } = useContext(ModalContext);

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
        <Button onClick={() => updateSkill({ id: nextId, name: "", progress: 0 })}>Add Skill</Button>
      </CardHeader>
      <CardContent>
        <Switch
          checked={showSkillLevel}
          onChange={() => setShowSkillLevel(!showSkillLevel)}
          label="Don't show skill level"
        />

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
                disabled={showSkillLevel || !skill.name}
                id={skill.id}
                name={"progress"}
                currentProgress={skill.progress || 5}
                handleChange={handleUpdateSkill}
              />
              <CardActions>
                <PopupModal
                  header="Delete Entry"
                  label="Delete"
                  id={"skill-" + skill.id}
                  action={
                    <Button
                      color={"accent"}
                      onClick={() => {
                        closeModal("skill-" + skill.id);
                        removeSkill(skill.id);
                      }}
                    >
                      Confirm
                    </Button>
                  }
                >
                  <p>Are you sure you want to delete this entry?</p>
                </PopupModal>
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
