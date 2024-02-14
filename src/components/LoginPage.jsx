import { useState } from "react";
//shadcn components
import { Button } from "./ui/button";
import { Input } from "./ui/input";

//in order to import the components
import Header from "./Header";

//in order to import components from react router dom
import { Link } from "react-router-dom";

//in order to import the image
import { NETFLIX_BG_IMG } from "@/utils/common";

const LoginPage = () => {
	const [logIn, setLogIn] = useState(true);

	//in order to toggle between log in page and sign up page
	const handleToggle = () => {
		setLogIn(!logIn);
	};

	return (
		<div className="relative">
			<Header />
			{/* in order to display the background image */}
			<div className="absolute">
				<img
					src={NETFLIX_BG_IMG}
					alt="bg-image"
					className="min-h-screen object-cover brightness-50"
				/>
			</div>
			<form
				action=""
				className="px-14 py-10 bg-black absolute w-1/2 lg:w-5/12 xl:w-3/12 xl:px-16 mt-28 right-0 left-0 mx-auto opacity-80 rounded-xl"
			>
				<div className="text-slate-100 font-bold text-3xl mb-8">
					{" "}
					{logIn ? "Sign In" : "Sign Up"}{" "}
				</div>

				{/* in order to enter the name and phone number in sign up page */}
				{!logIn && (
					<Input
						type="text"
						className="bg-slate-700 text-slate-50 my-4 font-bold text-base py-6 focus:outline-2 focus:outline-slate-50 "
						placeholder="Name"
					/>
				)}

				{!logIn && (
					<Input
						type="tel"
						className="bg-slate-700 text-slate-50 my-4 font-bold text-base py-6 focus:outline-2 focus:outline-slate-50 "
						placeholder="Phone"
					/>
				)}

				<Input
					type="email"
					className="bg-slate-700 text-slate-50 my-4 font-bold text-base py-6 focus:outline-2 focus:outline-slate-50  invalid:outline-none invalid:border-2 invalid:border-pink-600 invalid:text-pink-700"
					placeholder="Email"
				/>

				<Input
					type="password"
					className="bg-slate-700 text-slate-50 my-4 font-bold text-base py-6 focus:outline-2 focus:outline-slate-50 "
					placeholder="Password"
				/>

				<Button
					size="lg"
					className="w-full text-lg bg-red-600 font-bold my-2 hover:bg-red-700"
				>
					{logIn ? "Sign In" : "Sign Up"}
				</Button>

				{/* forgot password displayed only in log in page */}
				{logIn && (
					<Link to="/forgot">
						<Button
							size="lg"
							variant="link"
							className="w-full text-slate-50 text-lg font-base mb-16"
						>
							Forgot Password ?
						</Button>
					</Link>
				)}

				<div className="mx-2 flex items-center my-4">
					<span className="text-slate-50 text-lg">
						{" "}
						{logIn ? "New here?" : "Already User ?"}{" "}
					</span>
					<span
						className="text-slate-50 text-lg font-bold mx-2 hover:underline cursor-pointer"
						onClick={handleToggle}
					>
						{logIn ? "Sign Up" : "Sign In"}
					</span>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;
