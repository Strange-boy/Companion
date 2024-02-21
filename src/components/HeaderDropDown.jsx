import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

//in order to import the firebase functionality
import { auth } from "@/utils/firebase";
import { signOut } from "firebase/auth";

import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderDropDown() {
	const user = auth.currentUser;
	const [dropDown, setDropDown] = useState(false);
	const navigate = useNavigate();

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

				//navigate the user to log in page
				navigate("/");
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

	//in order to change the svg on button click
	const handleButtonClick = () => {
		console.log("clicked");
		// setDropDown(!dropDown);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="icon" onClick={handleButtonClick}>
					<img
						src={user.photoURL}
						alt="user-pic"
						className="w-8 rounded-md mx-2"
					/>
					{dropDown ? (
						<FontAwesomeIcon icon={faChevronUp} />
					) : (
						<FontAwesomeIcon icon={faChevronDown} />
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56 bg-slate-700 text-slate-50 font-sans opacity-80 font-semibold">
				<DropdownMenuLabel>{user.displayName}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						Profile
						<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem onClick={handleLogOut}>
						Log out
						<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
