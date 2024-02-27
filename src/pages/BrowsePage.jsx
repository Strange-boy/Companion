import useNowPlayingMovies from "@/hooks/useNowPlayingMovies";
import useTrendingMovies from "@/hooks/useTrendingMovies";

//in order to import the components
import MainContainer from "@/components/movies/MainContainer";
import SecondaryContainer from "@/components/movies/SecondaryContainer";

const BrowsePage = () => {
	// in order to display the now playing movies
	useNowPlayingMovies();

	//in order to display the trending movies
	useTrendingMovies();

	return (
		<div className="">
			<MainContainer />
			<SecondaryContainer />
		</div>
	);
};

export default BrowsePage;
