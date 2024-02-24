//importing the components
import LoginPage from "@/pages/LoginPage";
import BrowsePage from "@/pages/BrowsePage";
import UserSettings from "../components/UserSettings";
import ForgotPassword from "@/pages/ForgotPassword";

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
			path: "/forgot-password",
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
