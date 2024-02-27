import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<div>
			<header>
				<Header />
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default RootLayout;
