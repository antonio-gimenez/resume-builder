import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import useResume from "../../hooks/useResume";
import Collapse from "../Collapse";
import { Input } from "../ui";
import Range from "../ui/Range";

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
    <div className="container">
      <div className="flex">
        <h1 className="heading-2">Languages</h1>
        <div className=" add-new-entry" onClick={() => updateLanguage({ id: nextId, name: "", progress: 0 })}>
          <PlusIcon className="icon" />
          <span>New Entry</span>
        </div>
      </div>

      {languages.length > 0 ? (
        languages.map((lang, index) => (
          <Collapse key={lang.id} open={!lang.name} title={lang.name || "New Language"}>
            <div className="container-delete">
              <TrashIcon className="icon" onClick={() => removeLanguage(lang.id)} />
            </div>
            <div className="flex-auto">
              <Input
                id={lang.id}
                name="name"
                label={`Language #${index + 1}`}
                defaultValue={lang.name}
                placeholder="(e.g. English)"
                onChange={handleUpdateLanguage}
              />
              <Range
                levelType="languages"
                disabled={!lang.name}
                id={lang.id}
                name={"progress"}
                currentProgress={lang.progress}
                handleChange={handleUpdateLanguage}
              />
            </div>
          </Collapse>
        ))
      ) : (
        <div className="flex-auto">
          <p className="text-muted">No languages added yet.</p>
        </div>
      )}
    </div>
  );
}

export default Languages;
