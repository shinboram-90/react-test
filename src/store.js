import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./reducers/films";

export const store = configureStore({
	reducer: {
		films: filmsReducer,
	},
});
