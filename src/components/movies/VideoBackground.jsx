import { lazy, Suspense } from "react";
import useBackgroundTrailer from "@/hooks/useBackgroundTrailer";
import { useSelector } from "react-redux";
const ReactPlayer = lazy(() => import("react-player"));

const VideoBackground = ({ movieId }) => {
	const trailerVideo = useSelector((store) => store.movies?.backgroundTrailer);

	useBackgroundTrailer(movieId);

	return (
		<div className="w-screen aspect-video bg-slate-600">
			<Suspense>
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
			</Suspense>
		</div>
	);
};

export default VideoBackground;
