import { useEffect } from "react";
import { TMDB_TRENDING_MOVIES, TMDB_MOVIES_OPTIONS } from "@/utils/common";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "@/utils/redux/movieSlice";

const useTrendingMovies = () => {
	const dispatch = useDispatch();

	//in order to get the trending movies
	const getTrendingMovies = async () => {
		const data = await fetch(TMDB_TRENDING_MOVIES, TMDB_MOVIES_OPTIONS);
		const json = await data.json();

		const trendingMovies = json?.results;
		// console.log("Trending movies:", trendingMovies);

		dispatch(addTrendingMovies(trendingMovies));
	};

	useEffect(() => {
		getTrendingMovies();
	}, []);
};

export default useTrendingMovies;
