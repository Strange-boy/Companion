//importing the components
import LoginPage from "./LoginPage";
import BrowsePage from "./BrowsePage";
import UserSettings from "./UserSettings";
import ForgotPassword from "./ForgotPassword";

//routing using react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
		{
			path: "/settings",
			element: <UserSettings />,
		},
	]);

	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	);
};

export default Body;
