import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

//in order to import the font awesome icons
//in order to import font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

//in order to import the firebase functionality
import { auth } from "@/utils/firebase";
import { signOut } from "firebase/auth";

//in order to display the toast
import toast from "react-hot-toast";

export default function LogoutAlert() {
	//in order to handle the log out functions
	const handleLogOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				toast.success("Logged out", {
					style: {
						borderRadius: "10px",
						background: "#333",
						color: "#fff",
					},
				});
			})
			.catch((error) => {
				// An error happened.
				console.log(error.message);
				toast.error("Logged out", {
					style: {
						borderRadius: "10px",
						background: "#333",
						color: "#fff",
					},
				});
			});
	};

	return (
		<AlertDialog>
			<AlertDialogTrigger asChild>
				<Button variant="icon">
					<FontAwesomeIcon
						icon={faRightFromBracket}
						size="2xl"
						style={{ color: "#e2e4e3" }}
					/>
				</Button>
			</AlertDialogTrigger>
			<AlertDialogContent className="bg-slate-900 opacity-70">
				<AlertDialogHeader>
					<AlertDialogTitle className="text-white">
						🤔 Are you absolutely sure?
					</AlertDialogTitle>
					<AlertDialogDescription className="text-slate-100 text-base">
						Adventure awaits both on and off the screen. Until next time, happy
						exploring! 👋
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel className="font-semibold hover:bg-slate-200">
						Cancel
					</AlertDialogCancel>
					<AlertDialogAction
						className="bg-red-800 font-bold hover:bg-red-600"
						onClick={handleLogOut}
					>
						Logout
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
