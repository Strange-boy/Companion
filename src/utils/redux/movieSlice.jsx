import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
	name: "movie",
	initialState: {
		nowPlayingMovies: null,
		trendingMovies: null,
		backgroundTrailer: null,
	},
	reducers: {
		addNowPlayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addTrendingMovies: (state, action) => {
			state.trendingMovies = action.payload;
		},
		addBackgroundTrailer: (state, action) => {
			state.backgroundTrailer = action.payload;
		},
	},
});

export const {
	addNowPlayingMovies,
	addTrendingMovies,
	addBackgroundTrailer,
	addBackgroundMovie,
} = movieSlice.actions;
export default movieSlice.reducer;
