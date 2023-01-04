import { useReducer } from "react";

function useSectionTitles(initialState) {
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPSERT_SECTION_TITLE":
        return Object.assign({}, state, {
          sectionTitles: Object.assign({}, state.sectionTitles, {
            [action.sectionId]: action.title,
          }),
        });
      case "DELETE_SECTION_TITLE":
        const newSectionTitles = Object.assign({}, state.sectionTitles);
        delete newSectionTitles[action.sectionId];
        return Object.assign({}, state, { sectionTitles: newSectionTitles });
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const upsertSectionTitle = (sectionId, title) => {
    dispatch({ type: "UPSERT_SECTION_TITLE", sectionId, title });
  };

  const deleteSectionTitle = (sectionId) => {
    dispatch({ type: "DELETE_SECTION_TITLE", sectionId });
  };

  return [state, { upsertSectionTitle, deleteSectionTitle }];
}

export default useSectionTitles;
