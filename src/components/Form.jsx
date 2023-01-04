import React from "react";
import { Button, Input } from "./ui";
import useSections from "../reducers/useSections";

function Form() {
  const [sections, { upsertSectionTitle, changeOrder }] = useSections();

  return (
    <>
      <form>
        {console.log(sections)}
        <Input
          label={sections["workExperience"]}
          id="firstName"
          name="firstName"
          onChange={(event) => {
            upsertSectionTitle(Object.keys(sections)[0], event.target.value);
          }}
          defaultValue={sections["workExperience"]}
        />
        <Button color="accent" onClick={() => changeOrder("workExperience", "down")}>
          Up
        </Button>
        <Input
          label={sections["aaa"]}
          id="firstName"
          name="firstName"
          onChange={(event) => {
            upsertSectionTitle("aaa", event.target.value);
          }}
          defaultValue={sections["aaa"]}
        />
      </form>
    </>
  );
}

export default Form;
