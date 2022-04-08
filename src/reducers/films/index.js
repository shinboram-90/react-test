import { createSlice } from '@reduxjs/toolkit';
import { getFilmsList } from '../../api/moviesdatabase';

const initialState = {
  list: [],
};

// call function that fetches the api and display data with dispatch, linking it to our slice
export const fetchMovies = (page) => (dispatch) => {
  getFilmsList(page).then((data) => {
    dispatch(populateFilms(data));
  });
};

export const filmsSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    populateFilms: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.list = action.payload.mList;
      state.total = action.payload.totalPages;
    },
  },
});

// Action creators are generated for each case reducer function

// TODO : exporter la slice :)
export const { populateFilms } = filmsSlice.actions;

export default filmsSlice.reducer;
