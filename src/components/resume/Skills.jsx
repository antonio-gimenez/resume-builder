import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import useResume from "../../hooks/useResume";
import Collapse from "../Collapse";
import { Button, Input } from "../ui";
import Range from "../ui/Range";

function Skills() {
  const { skills, updateTitles, sectionTitles, updateSkill, removeSkill } = useResume();
  const [nextId, setNextId] = useState(skills.length > 0 ? skills[skills.length - 1].id + 1 : 0);
  const [editTitle, setEditTitle] = useState(false);
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
    <div className="container">
      <div className="flex">
        {editTitle ? (
          <Input
            name="skills"
            maxLength={20}
            onBlur={() => setEditTitle(false)}
            placeholder="e.g. Personal Details"
            value={sectionTitles.skills}
            onInput={updateTitles}
          />
        ) : (
          <>
            <h1 className="heading-2">{sectionTitles.skills}</h1>
            <Button onClick={() => setEditTitle(true)} className="edit-title">
              {" "}
              Edit{" "}
            </Button>
          </>
        )}

        {/* Bigger is more proficient */}
        <div className=" button" onClick={() => updateSkill({ id: nextId, name: "", progress: 0 })}>
          <PlusIcon className="icon" />
          <span>New Entry</span>
        </div>
      </div>
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
                // disabled={!skill.name}
                id={skill.id}
                name={"progress"}
                currentProgress={skill.progress || 5}
                handleChange={handleUpdateSkill}
              />
            </div>
            <div className="container-delete">
              <TrashIcon className="icon" onClick={() => removeSkill(skill.id)} />
            </div>
          </Collapse>
        ))
      ) : (
        <div className="flex-auto">
          <p className="text-muted">No skills added yet.</p>
        </div>
      )}
    </div>
  );
}

export default Skills;
