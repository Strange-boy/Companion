import { HEADER_LOGO } from "@/utils/common";
import HeaderDropDown from "./HeaderDropDown";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "@/utils/redux/userSlice";
import LogoutAlert from "./LogoutAlert";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "@/utils/firebase";

const Header = () => {
	const user = useSelector((store) => store.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				// console.log("hello");

				navigate("/browse");
			} else {
				dispatch(removeUser());

				const forgotPassword = location.pathname.startsWith("/forgot");
				if (!forgotPassword) navigate("/");
			}
		});

		return () => unsubscribe();
	}, []);

	return (
		<div className="absolute z-40 pt-1 w-full flex justify-between bg-gradient-to-b from-black">
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
