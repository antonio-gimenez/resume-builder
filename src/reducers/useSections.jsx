import { useReducer } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import initialState from "../initialState";
// example of section titles state
// sectionTitles = [
//   { "workExperience": "Experiencia Laboral" },
// ]

function useSections() {
  // useLocalStorage hook to save the state in the browser's local storage

  const [sections, setSections] = useLocalStorage("sections", initialState.sectionsTitles);

  const sectionReducer = (state, action) => {
    switch (action.type) {
      case "UPSERT":
        // If the item already exists in the object, update it
        if (Object.keys(state).includes(action.payload.sectionName)) {
          return {
            ...state,
            [action.payload.sectionName]: action.payload.title,
          };
        }
        // Otherwise, return a new object with the item added
        return {
          ...state,
          [action.payload.sectionName]: action.payload.title,
        };
      case "DELETE":
        // If the item exists in the object, delete it
        if (Object.keys(state).includes(action.payload.sectionName)) {
          const { [action.payload.sectionName]: _, ...newState } = state;
          return newState;
        }
        // Otherwise, return the state as is
        return state;
      case "RESET":
        return initialState[action.payload.sectionName];
      case "CHANGE_ORDER":
        const sectionNames = Object.keys(state);
        const sectionIndex = sectionNames.indexOf(action.payload.sectionName);
        if (sectionIndex === -1) {
          return state;
        }
        let newSectionNames;
        if (action.payload.direction === "up") {
          if (sectionIndex === 0) {
            return state;
          }
          newSectionNames = [
            ...sectionNames.slice(0, sectionIndex - 1),
            sectionNames[sectionIndex],
            sectionNames[sectionIndex - 1],
            ...sectionNames.slice(sectionIndex + 1),
          ];
        } else if (action.payload.direction === "down") {
          if (sectionIndex === sectionNames.length - 1) {
            return state;
          }
          newSectionNames = [
            ...sectionNames.slice(0, sectionIndex),
            sectionNames[sectionIndex + 1],
            sectionNames[sectionIndex],
            ...sectionNames.slice(sectionIndex + 2),
          ];
        } else {
          return state;
        }
        const newState = {};
        newSectionNames.forEach((name) => {
          newState[name] = state[name];
        });
        return newState;

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(sectionReducer, sections);

  const upsertSectionTitle = (sectionName, title) => {
    dispatch({ type: "UPSERT", payload: { sectionName, title } });
    setSections({ ...state, [sectionName]: title });
  };

  const deleteSectionTitle = (sectionName) => {
    dispatch({ type: "DELETE", payload: { sectionName } });
    setSections({ ...state });
  };

  const resetSectionTitle = (sectionName) => {
    dispatch({ type: "RESET", payload: { sectionName } });
    setSections({ ...state });
  };

  const changeOrder = (sectionName, direction) => {
    dispatch({ type: "CHANGE_ORDER", payload: { sectionName, direction } });
    setSections({ ...state });
  };

  return [state, { upsertSectionTitle, deleteSectionTitle, resetSectionTitle, changeOrder }];
}
export default useSections;
