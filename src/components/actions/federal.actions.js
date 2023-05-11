export const UPDATE_STATE = "UPDATE_STATE";
export const UPDATE_EXEMPTIONS = "UPDATE_EXEMPTIONS";

export const updateState = (usState) => {
  return { type: UPDATE_STATE, payload: usState };
};

export const updateExemptions = (exemptions) => {
  return { type: UPDATE_EXEMPTIONS, payload: exemptions };
};
