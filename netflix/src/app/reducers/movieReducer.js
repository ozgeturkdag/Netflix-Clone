import { Actiontypes } from "../actionTypes";

const initialState = {
  popularFilms: [],
  genres: [],
  loading: false,
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actiontypes.GET_FILMS:
      return {
        ...state,
        popularFilms: payload,
      };
    case Actiontypes.GET_GENRES:
      return {
        ...state,
        genres: payload,
      };
    default:
      return state;
  }
};
