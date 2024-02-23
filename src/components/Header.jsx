import { HEADER_LOGO } from "@/utils/common";
import HeaderDropDown from "./HeaderDropDown";
import { useSelector } from "react-redux";
import LogoutAlert from "./LogoutAlert";

const Header = () => {
	const user = useSelector((store) => store.user);
	return (
		<div className="absolute z-40 mt-1 w-full flex justify-between ">
			<div>
				<img src={HEADER_LOGO} alt="logo" className="w-24 ml-6" />
			</div>
			<div className="flex justify-center items-center mr-4">
				<div>
					{user && (
						<div className="flex items-center">
							<HeaderDropDown />
						</div>
					)}
				</div>
				<div>{user && <LogoutAlert />}</div>
			</div>
		</div>
	);
};

export default Header;
