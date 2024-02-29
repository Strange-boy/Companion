import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_MOVIES_OPTIONS } from "@/utils/common";
import { addBackgroundTrailer } from "@/utils/redux/movieSlice";

const useBackgroundTrailer = (movieId) => {
	const dispatch = useDispatch();

	const TMDB_MOVIE_VIDEO =
		"https://api.themoviedb.org/3/movie/" + movieId + "/videos";

	const getMovieClips = async () => {
		const data = await fetch(TMDB_MOVIE_VIDEO, TMDB_MOVIES_OPTIONS);
		const json = await data.json();

		//fetch all the movie clips
		const allMovieClips = json.results;

		//filter the clips with trailer
		let clipsWithTrailer = allMovieClips.filter(
			(clips) =>
				clips.type === "Trailer" && clips.name.toLowerCase().includes("trailer")
		);

		//edge case if there is no trailer found
		if (clipsWithTrailer.length === 0) clipsWithTrailer = allMovieClips;

		//in order to fetch the official trailer among all trailers
		const officialTrailer = allMovieClips.filter(
			(clips) =>
				clips.type === "Trailer" &&
				clips.name.toLowerCase().includes("official trailer")
		);

		//in order to select a random trailer from all the given options
		const randomIdx = Math.floor(Math.random() * clipsWithTrailer.length);
		const randomTrailer = clipsWithTrailer[randomIdx];
		console.log("Random Trailer:", randomTrailer);
		dispatch(addBackgroundTrailer(randomTrailer));
	};

	//in order to fetch the video results
	useEffect(() => {
		getMovieClips();
	}, []);
};

export default useBackgroundTrailer;
