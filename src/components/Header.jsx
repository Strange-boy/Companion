import { HEADER_LOGO } from "@/utils/common";

const Header = () => {
	return (
		<div className="absolute z-40 mt-1 ml-6 ">
			<img src={HEADER_LOGO} alt="logo" className="w-24" />
		</div>
	);
};

export default Header;
