// reducer.js
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SET_FAVORITES} from "../actions/favoritesActions";

const initialState = {
  favorites: [], // An array to store favorite jobs
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((job) => job.id !== action.payload),
      };
    case SET_FAVORITES:
      return {
        ...state,
        favorites:action.payload,
      }
    default:
      return state;
  }
};

export default favoritesReducer;