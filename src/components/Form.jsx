import React from "react";
import initialState from "../data.json";
import { Input } from "./ui";
import useSectionTitles from "../reducers/useSectionTitles";

function Form() {
  const [sections, { upsertSectionTitle, changeOrder }] = useSectionTitles(initialState.sectionTitles);

  return (
    <>
      <form>
        {JSON.stringify(sections)}
        <Input
          label={sections["workExperience"]}
          id="firstName"
          name="firstName"
          onChange={(event) => {
            upsertSectionTitle("workExperience", event.target.value);
          }}
          defaultValue={sections["workExperience"]}
        />
        <Input
          label={sections["education"]}
          id="firstName"
          name="firstName"
          onChange={(event) => {
            upsertSectionTitle("education", event.target.value);
          }}
          defaultValue={sections["education"]}
        />
      </form>
    </>
  );
}

export default Form;
