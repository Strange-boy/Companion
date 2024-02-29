import useBackgroundTrailer from "@/hooks/useBackgroundTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
	const trailerVideo = useSelector((store) => store.movies?.backgroundTrailer);

	//in order to fetch the background trailer
	useBackgroundTrailer(movieId);

	return (
		<div>
			<iframe
				width="560"
				height="315"
				src={"https://www.youtube.com/embed/" + trailerVideo?.key}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
			></iframe>
		</div>
	);
};

export default VideoBackground;
