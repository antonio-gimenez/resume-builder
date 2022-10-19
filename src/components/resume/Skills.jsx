import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import useResume from "../../hooks/useResume";
import { Container } from "../layouts";
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
    <div>
      <h1 className="heading-2">Skills</h1>

      <div>nextId={nextId}</div>
      <div>skills={JSON.stringify(skills)}</div>
      <Container style={{ marginTop: "2rem" }}>
        <label style={{ display: "inline-flex", alignItems: "center" }}>
          <Input type="checkbox" />
          Show Badges insted of progress bars
        </label>
        {skills.map((skill, index) => (
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "2em" }} key={skill.id}>
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
            <TrashIcon className="icon" onClick={() => removeSkill(skill.id)} />
          </div>
        ))}
      </Container>
      <span className="link" role={"link"} onClick={() => updateSkill({ id: nextId, name: "", progress: 0 })}>
        Add new skill
      </span>
    </div>
  );
}

export default Skills;
