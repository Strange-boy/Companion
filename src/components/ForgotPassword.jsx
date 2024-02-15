import Header from "./Header";
import { NETFLIX_FORGOT_PASSWORD_IMG } from "@/utils/common";

//shadcn-ui components
import { Input } from "./ui/input";
import { Button } from "./ui/button";

//react router dom
import { Link } from "react-router-dom";

const ForgotPassword = () => {
	return (
		<div className="">
			{/* first we need to import the header */}
			<Header />
			<div className="absolute w-full">
				<img
					src={NETFLIX_FORGOT_PASSWORD_IMG}
					alt="bg-img"
					className="min-h-screen min-w-full object-cover"
				/>
			</div>
			<form
				action=""
				className="px-14 py-10 bg-slate-800 absolute w-1/2 lg:w-5/12 xl:w-3/12 xl:px-16 mt-44 right-0 left-0 mx-auto opacity-70 rounded-xl"
			>
				<div className="text-slate-100 font-bold text-3xl mb-8">
					Forgot Password ?
				</div>

				<p className="text-slate-100 font-semibold">
					We will send you an email with instructions on how to reset your
					password.
				</p>
				<Input
					type="email"
					className="bg-slate-700 text-slate-50 my-4 font-bold text-base py-6 focus:outline-2 focus:outline-slate-50  invalid:outline-none invalid:border-2 invalid:border-pink-600 invalid:text-pink-700"
					placeholder="Email"
				/>

				<Button
					size="lg"
					className="w-full text-lg bg-red-600 font-bold my-2 hover:bg-red-700"
				>
					Send Email
				</Button>

				<div className="mt-4">
					<span className="text-slate-50 font-semibold text-md ml-1 cursor-pointer hover:underline">
						<Link to="/">Head to Log in Page ?</Link>
					</span>
				</div>
			</form>
		</div>
	);
};

export default ForgotPassword;
