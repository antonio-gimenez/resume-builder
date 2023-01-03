const updateNestedField = (state, action, objectName, field) => {
  return {
    ...state,
    [objectName]: {
      ...state[objectName],
      [field]: action.value,
    },
  };
};

const updateField = (state, action, field) => {
  return {
    ...state,
    [field]: action.value,
  };
};

export default function reducer(state, action) {
  try {
    let objectName, field, value;
    switch (action.type) {
      case "updateNestedField":
        objectName = action.payload.objectName;
        field = action.payload.field;
        value = action.payload.value;
        return updateNestedField(state, { value }, objectName, field);
      case "updateField":
        field = action.payload.field;
        value = action.payload.value;
        return updateField(state, { value }, field);
      default:
        return state;
    }
  } catch (error) {
    console.error(error);
    return state;
  }
}
