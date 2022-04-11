import { createSlice } from '@reduxjs/toolkit';
import { getFilmsList, searchMovieByTitle } from '../../api/moviesdatabase';

const initialState = {
  list: [],
};

// Call function that fetches the api and display data with dispatch, linking it to our slice
export const fetchMovies = (page) => (dispatch) => {
  getFilmsList(page).then((data) => {
    dispatch(populateFilms(data));
  });
};

export const searchMovies = (title) => (dispatch) => {
  searchMovieByTitle(title).then((data) => {
    dispatch(searchFilms(data));
  });
};

export const filmsSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    populateFilms: (state, action) => {
      state.list = action.payload.mList;
      state.total = action.payload.totalPages;
    },
    searchFilms: (state, action) => {
      state.list = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function

// TODO : exporter la slice :)
export const { populateFilms, searchFilms } = filmsSlice.actions;

export default filmsSlice.reducer;
