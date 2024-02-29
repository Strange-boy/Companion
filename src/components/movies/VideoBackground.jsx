import useBackgroundTrailer from "@/hooks/useBackgroundTrailer";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

const VideoBackground = ({ movieId }) => {
	const trailerVideo = useSelector((store) => store.movies?.backgroundTrailer);

	//in order to fetch the background trailer
	useBackgroundTrailer(movieId);

	return (
		<div className="w-screen aspect-video bg-slate-600">
			<ReactPlayer
				url={`https://www.youtube.com/watch?v=${trailerVideo?.key}`}
				loop={true}
				controls={false}
				volume={0}
				muted={true}
				playing={true}
				width="100%"
				height="100%"
			/>
		</div>
	);
};

export default VideoBackground;
