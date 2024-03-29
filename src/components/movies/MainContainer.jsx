import React from "react";
import { useSelector } from "react-redux";

//in order to import the components
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

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
	const backgroundMovie = filteredTrendingMovies[2];
	console.log(backgroundMovie);
	const { id, original_title, overview } = backgroundMovie;

	return (
		<div className="">
			<VideoTitle title={original_title} overview={overview} />
			<VideoBackground movieId={id} />
		</div>
	);
};

export default MainContainer;
