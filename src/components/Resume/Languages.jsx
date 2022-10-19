import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import useResume from "../../hooks/useResume";
import { Container } from "../layouts";
import { Input } from "../ui";
import Range from "../ui/Range";

const languagesLevels = [
  { label: "Elementary", progress: 5, min: 0, max: 20 },
  { label: "Limited Working", progress: 25, min: 20, max: 35 },
  { label: "Professional Working", progress: 50, min: 35, max: 55 },
  { label: "Full Professional", progress: 75, min: 55, max: 80 },
  { label: "Native/Bilingual", progress: 100, min: 80, max: 100 },
];

function Languages() {
  const { languages, updateLanguage, removeLanguage } = useResume();
  const [nextId, setNextId] = useState(languages.length > 0 ? languages[languages.length - 1].id + 1 : 0);

  useEffect(() => {
    setNextId(languages.length > 0 ? languages[languages.length - 1].id + 1 : 0);
  }, [languages]);

  const handleUpdateLanguage = (e) => {
    const { id, name, value } = e.target;
    const langId = parseInt(id);
    const lang = languages.find((lang) => lang.id === langId);
    const updatedLang = { ...lang, [name]: value };
    updateLanguage(updatedLang);
  };

  return (
    <div>
      <h1 className="heading-2">Languages</h1>
      <div>nextId={nextId}</div>
      <div>languages={JSON.stringify(languages)}</div>
      <Container style={{ marginTop: "2rem" }}>
        {languages.map((lang) => (
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "1rem" }} key={lang.id}>
            <Input
              id={lang.id}
              name="name"
              defaultValue={lang.name}
              placeholder="Language"
              onChange={handleUpdateLanguage}
            />
            <Range
              levels={languagesLevels}
              disabled={!lang.name}
              id={lang.id}
              name={"progress"}
              currentProgress={lang.progress}
              handleChange={handleUpdateLanguage}
            />
            <TrashIcon className="icon" onClick={() => removeLanguage(lang.id)} />
          </div>
        ))}
      </Container>
      <span className="link" role={"link"} onClick={() => updateLanguage({ id: nextId, name: "", progress: 0 })}>
        Add new language
      </span>
    </div>
  );
}

export default Languages;
