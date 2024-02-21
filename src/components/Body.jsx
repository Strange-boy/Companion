//importing the components
import LoginPage from "./LoginPage";
import BrowsePage from "./BrowsePage";

//routing using react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import { useEffect } from "react";

//firebase functionality
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "@/utils/redux/userSlice";

const Body = () => {
	const dispatch = useDispatch();
	const appRouter = createBrowserRouter([
		{
			path: "/",
			element: <LoginPage />,
		},
		{
			path: "/browse",
			element: <BrowsePage />,
		},
		{
			path: "/forgot",
			element: <ForgotPassword />,
		},
	]);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
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
			} else {
				dispatch(removeUser());
			}
		});
	}, []);

	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	);
};

export default Body;
