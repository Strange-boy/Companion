import { NETFLIX_HEADER_LOGO } from "@/utils/common";

const Header = () => {
	return (
		<div className="absolute z-40 mt-2 ml-6 ">
			<img src={NETFLIX_HEADER_LOGO} alt="logo" className="w-48" />
		</div>
	);
};

export default Header;
