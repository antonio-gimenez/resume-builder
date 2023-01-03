import { useReducer, useCallback } from "react";
import useLocalStorage from "./useLocalStorage";

function useResume({ initialState }) {
  const [resume, setResume] = useLocalStorage("resume", initialState);

  const getType = useCallback((value) => {
    if (Array.isArray(value)) {
      return "array";
    }
    return typeof value;
  }, []);

  const reducer = useCallback(
    (state, action) => {
      switch (action.type) {
        case "INSERT_UPDATE_DATA":
          const fieldType = getType(action.field);
          if (fieldType === "string") {
            setResume({ ...state, [action.field]: action.value });
            return { ...state, [action.field]: action.value };
          } else if (fieldType === "array") {
            const [object, field] = action.field;
            setResume({ ...state, [object]: { ...state[object], [field]: action.value } });
            return { ...state, [object]: { ...state[object], [field]: action.value } };
          } else {
            throw new Error(`Unhandled field type: ${fieldType}`);
          }
        case "DELETE_DATA":
          const { [action.field]: _, ...rest } = state;
          setResume(rest);
          return rest;
        default:
          throw new Error(`Unhandled action type: ${action.type}`);
      }
    },

    [getType, setResume]
  );

  const [state, dispatch] = useReducer(reducer, resume);

  const insertUpdateData = useCallback(
    (field, value) => {
      dispatch({ type: "INSERT_UPDATE_DATA", field, value });
    },
    [dispatch]
  );

  const deleteData = useCallback(
    (field) => {
      dispatch({ type: "DELETE_DATA", field });
    },
    [dispatch]
  );

  return [state, { insertUpdateData, deleteData }];
}

export default useResume;
