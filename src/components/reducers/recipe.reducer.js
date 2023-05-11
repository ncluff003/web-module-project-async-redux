import { UPDATE_SEARCH_TERM } from "../actions/search.actions";
import { GET_RECIPES } from "../actions/recipe.actions";

const initialState = {
  searchTerm: "",
  recipes: {
    data: [],
    page: 0,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case GET_RECIPES:
      console.log(action, action.payload);
      return { ...state, recipes: { ...state.recipes, data: [...action.payload] } };
    default:
      return state;
  }
};

export default reducer;
