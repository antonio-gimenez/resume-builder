import React, { useState } from "react";
import useResume from "../hooks/useResume";
import initialState from "../data.json";
import { Input } from "./ui";
import useSectionTitles from "../reducers/useSectionTitles";

function Form() {
  const [state, { insertUpdateData }] = useResume(initialState);

  const [sections, { upsertSectionTitle }] = useSectionTitles(initialState.sectionTitles);
  const [formState, setFormState] = useState(state);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Object.entries(formState).forEach(([field, value]) => {
      insertUpdateData(field, value);
    });
  };

  return (
    <>
      <form>
        {JSON.stringify(sections)}
        <Input
          label={sections["workExperience"]}
          id="firstName"
          name="firstName"
          onChange={(event) => {
            upsertSectionTitle(0, event.target.value);
          }}
          value={state.sectionTitles["workExperience"]}
        />
      </form>
      <form onSubmit={handleSubmit}>
        {/* {JSON.stringify(formState)} */}
        <Input
          label="First Name"
          id="firstName"
          name="firstName"
          value={formState.firstName || ""}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} />
        <br />
        <label htmlFor="phone">Street:</label>
        <input type="text" id="phone" name="phone" value={formState.phone} onChange={handleChange} />
        <br />
      </form>
    </>
  );
}

export default Form;
