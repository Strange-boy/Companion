import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
	// Split the sentence into clauses based on commas and semicolons
	const clauses = overview.split(/[,;.]+/);

	// Shorten the sentence to 2-3 clauses and add "..."
	const trimmedSentence =
		overview.length > 205 ? clauses.slice(0, 3).join(" ") + "..." : overview;
	return (
		<div className="pt-[25%] pl-10 w-screen aspect-video absolute bg-gradient-to-r from-black">
			<h3 className="text-2xl lg:text-4xl font-sans font-extrabold mb-4 text-white">
				{title}
			</h3>
			<p className="text-base font-bold lg:text-lg mb-4 text-white w-1/2 lg:w-1/3">
				"{trimmedSentence}"
			</p>
			<div>
				<Button size="lg" className="lg:text-xl lg:p-6">
					<FontAwesomeIcon icon={faPlay} />
					<p className="px-2 text-base font-semibold">Play Trailer</p>
				</Button>
				<Button
					size="lg"
					variant="outline"
					className="ml-2 border-4 border-slate-900  bg-transparent text-white lg:text-xl lg:p-6"
				>
					<FontAwesomeIcon icon={faCircleInfo} />
					<p className="px-2 text-base font-semibold">More Info</p>
				</Button>
			</div>
		</div>
	);
};

export default VideoTitle;
