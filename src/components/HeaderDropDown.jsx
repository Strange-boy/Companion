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

import { useState } from "react";

export default function HeaderDropDown() {
	const user = auth.currentUser;
	const [dropDown, setDropDown] = useState(false);

	//in order to change the svg on button click
	const handleButtonClick = () => {
		setDropDown(!dropDown);
	};

	return (
		<DropdownMenu onOpenChange={handleButtonClick}>
			<DropdownMenuTrigger asChild>
				<Button variant="icon">
					<img
						src={user?.photoURL}
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
				<DropdownMenuLabel>{user?.displayName}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						Settings
						<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
