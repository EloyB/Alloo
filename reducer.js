import AsyncStorage from "@react-native-async-storage/async-storage";

export const initialState = {
  history: [],
  favorites: [],
};

export const createGuid = () => {
  const rndStr = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return rndStr() + "-" + rndStr() + "-" + rndStr() + "-" + rndStr();
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

    case "INITIALIZE_HISTORY":
      return {
        ...state,
        history: action.list,
      };

    case "INITIALIZE_FAVORITES":
      return {
        ...state,
        favorites: action.list,
      };

    case "REMOVE_HISTORY_ITEM":
      const index = state.history.findIndex((x) => x.id === action.id);
      const updatedHistory = [...state.history];
      updatedHistory.splice(index, 1);
      return { ...state, history: updatedHistory };

    default:
      break;
  }
};

export default reducer;
