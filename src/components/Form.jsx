import React, { useState } from "react";
import useResume from "../hooks/useResumeNew";
import initialState from "../data2.json";
import { Input } from "./ui";
function Form() {
  const [state, { insertUpdateData, deleteData }] = useResume({ initialState: initialState });
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
    <form onSubmit={handleSubmit}>
      {JSON.stringify(state)}
      <label htmlFor="name">Name:</label>
      <Input type="text" id="name" name="name" value={formState.name || ""} onChange={handleChange} />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} />
      <br />
      <label htmlFor="phone">Street:</label>
      <input type="text" id="phone" name="phone" value={formState.phone} onChange={handleChange} />
      <br />
    </form>
  );
}

export default Form;
