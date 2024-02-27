import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
	name: "movie",
	initialState: {
		nowPlayingMovies: null,
		trendingMovies: null,
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addTrendingMovies: (state, action) => {
			state.trendingMovies = action.payload;
		},
	},
});

export const { addNowPlayingMovies, addTrendingMovies } = movieSlice.actions;
export default movieSlice.reducer;
