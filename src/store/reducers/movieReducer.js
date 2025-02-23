import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";
import movies from "../../data.js";

const initialState = {
  movies: movies,
  appTitle: "KARA BORSA FİLMLER",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      // console.log("reducer Delete", action.payload);
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
