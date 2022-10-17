import React, { useEffect, useState } from "react";
import useResume from "../hooks/useResume";

function NewSkill() {
  const { skills, setResume } = useResume();
  const [tempSkill, setTempSkill] = useState(null);

  useEffect(() => {
    if (tempSkill) {
      setResume((prev) => ({
        ...prev,
        skills: [...prev.skills, tempSkill],
      }));
      setTempSkill(null);
    }
  }, []);

  return <div className="bordered-container"></div>;
}

export default NewSkill;
