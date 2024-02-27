import { TMDB_NOW_PLAYING, TMDB_MOVIES_OPTIONS } from "@/utils/common";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "@/utils/redux/movieSlice";

const BrowsePage = () => {
	const dispatch = useDispatch();

	const getNowPlayingMovies = async () => {
		const data = await fetch(TMDB_NOW_PLAYING, TMDB_MOVIES_OPTIONS);
		const json = await data.json();

		//in order to just fetch the movie results
		const nowPlayingMovie = json?.results;

		//adding this movie result into redux store
		dispatch(addNowPlayingMovies(nowPlayingMovie));
	};

	//in order to fetch the movie list
	useEffect(() => {
		getNowPlayingMovies();
	}, []);

	return <div className=""></div>;
};

export default BrowsePage;
