//importing the components
import LoginPage from "./LoginPage";
import BrowsePage from "./BrowsePage";

//routing using react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";

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
