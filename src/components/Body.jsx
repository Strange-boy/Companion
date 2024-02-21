//importing the components
import LoginPage from "./LoginPage";
import BrowsePage from "./BrowsePage";

//routing using react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import { useEffect } from "react";

//firebase functionality
import { onAuthStateChanged } from "firebase/auth";

const Body = () => {
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

	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	);
};

export default Body;
