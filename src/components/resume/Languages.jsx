import React, { useEffect, useState } from "react";
import useResume from "../../hooks/useResume";
import Card, { CardActions, CardContent, CardHeader } from "../Card";
import Collapse from "../Collapse";
import PopupModal from "../ui/PopupModal";
import { Button, Input } from "../ui";
import Range from "../ui/Range";

function Languages() {
  const { languages, updateLanguage, removeLanguage } = useResume();
  const [nextId, setNextId] = useState(languages.length > 0 ? languages[languages.length - 1].id + 1 : 0);

  const [isModalOpen, setModalOpen] = useState({});

  function handleModal(id) {
    setModalOpen({
      [id]: !isModalOpen[id] ? true : false,
    });
  }

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
    <Card>
      <CardHeader>
        <h2 className="card-title">Languages</h2>
        <Button color={"primary"} onClick={() => updateLanguage({ id: nextId, name: "", progress: 0 })}>
          Add Language
        </Button>
      </CardHeader>
      <CardContent>
        {languages.length > 0 ? (
          languages.map((lang) => (
            <Collapse key={lang.id} open={!lang.name} title={lang.name || "(Not specified)"}>
              <div>
                <Input
                  id={lang.id}
                  name="name"
                  label={`Language`}
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
              <CardActions>
                <PopupModal
                  header="Delete Language"
                  label="Delete"
                  id={"lang" + lang.id}
                  action={
                    <Button
                      color={"accent"}
                      onClick={() => {
                        removeLanguage(lang.id);
                        handleModal(lang.id);
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
            <p className="text-muted">No languages added yet.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default Languages;
