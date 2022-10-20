import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import useResume from "../../hooks/useResume";
import Collapse from "../Collapse";
import { Input } from "../ui";
import Range from "../ui/Range";

function Skills() {
  const { skills, updateSkill, removeSkill } = useResume();
  const [nextId, setNextId] = useState(skills.length > 0 ? skills[skills.length - 1].id + 1 : 0);

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
        <h1 className="heading-2">Skills</h1>
        {/* Bigger is more proficient */}
        <div className=" add-new-entry" onClick={() => updateSkill({ id: nextId, name: "", progress: 0 })}>
          <PlusIcon className="icon" />
          <span>New Entry</span>
        </div>
      </div>
      {skills.map((skill, index) => (
        <Collapse key={skill.id} open={true} title={skill.name || "New Item"}>
          <div className="container-delete">
            <TrashIcon className="icon" onClick={() => removeSkill(skill.id)} />
          </div>
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
              disabled={!skill.name}
              id={skill.id}
              name={"progress"}
              currentProgress={skill.progress}
              handleChange={handleUpdateSkill}
            />
          </div>
        </Collapse>
      ))}
    </div>
  );
}

export default Skills;
