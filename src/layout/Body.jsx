//importing the components
import LoginPage from "@/pages/LoginPage";
import BrowsePage from "@/pages/BrowsePage";
import UserSettings from "../components/UserSettings";
import ForgotPassword from "@/pages/ForgotPassword";
import RootLayout from "./RootLayout";

//routing using react router dom
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

const Body = () => {
	const appRouter = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route index element={<LoginPage />} />
				<Route path="/browse" element={<BrowsePage />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
			</Route>
		)
	);

	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	);
};

export default Body;
