export const initialState = {
  history: [],
  favorites: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_HISTORY":
      return {
        ...state,
        history: [...state.history, action.item],
      };

    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: [...state.favorites, action.item],
      };

    default:
      break;
  }
};

export default reducer;
