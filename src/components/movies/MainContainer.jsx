import React from "react";
import { useSelector } from "react-redux";

const MainContainer = () => {
	const allTrendingMovies = useSelector(
		(store) => store.movies?.trendingMovies
	);

	//early return
	if (!allTrendingMovies) return;

	//filtered japanese and korean movies due to inconsistency in text
	const filteredTrendingMovies = allTrendingMovies.filter(
		(movie) =>
			movie?.original_language !== "ko" && movie?.original_language !== "ja"
	);

	//select a random movie
	const randomIndex = Math.floor(Math.random() * filteredTrendingMovies.length);
	const backgroundMovie = filteredTrendingMovies[randomIndex];
	console.log(backgroundMovie);

	return <div>MainContainer</div>;
};

export default MainContainer;
