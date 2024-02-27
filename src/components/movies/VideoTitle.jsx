import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
	// Split the sentence into clauses based on commas and semicolons
	const clauses = overview.split(/[,;.]+/);

	// Shorten the sentence to 2-3 clauses and add "..."
	const trimmedSentence = clauses.slice(0, 3).join(" ") + "...";
	return (
		<div className="pt-32 pl-5 w-1/2 lg:w-1/3">
			<h3 className="text-xl font-sans font-semibold mb-2">{title}</h3>
			<p className="text-sm mb-1">"{trimmedSentence}"</p>
			<div>
				<Button size="lg">
					<FontAwesomeIcon icon={faPlay} />
					<p className="px-2 text-base font-semibold">Play Trailer</p>
				</Button>
				<Button
					size="lg"
					variant="outline"
					className="ml-2 border-2 border-slate-900"
				>
					<FontAwesomeIcon icon={faCircleInfo} />
					<p className="px-2 text-base font-semibold">More Info</p>
				</Button>
			</div>
		</div>
	);
};

export default VideoTitle;
