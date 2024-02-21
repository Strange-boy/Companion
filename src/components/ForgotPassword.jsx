import Header from "./Header";
import { NETFLIX_FORGOT_PASSWORD_IMG } from "@/utils/common";

//shadcn-ui components
import { Input } from "./ui/input";
import { Button } from "./ui/button";

//react router dom
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import toast from "react-hot-toast";

//firebase functionality
import { auth } from "@/utils/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
	const form = useForm();
	const { register, control, handleSubmit, formState } = form;
	const { errors } = formState;

	const submitPasswordReset = async (data) => {
		const { email } = data;
		// console.log("email", email);
		sendPasswordResetEmail(auth, email)
			.then(() => {
				toast.success("Password reset mail sent", {
					style: {
						borderRadius: "10px",
						background: "#333",
						color: "#fff",
					},
				});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	};

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
				onSubmit={handleSubmit(submitPasswordReset)}
				noValidate
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
					className="bg-slate-700 text-slate-50 my-4 font-bold text-base py-6 focus:outline-2 focus:outline-slate-50"
					placeholder="Email"
					{...register("email", {
						required: {
							value: true,
							message: "Email id required",
						},
						pattern: {
							value:
								/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
							message: "Please Enter a valid Email",
						},
						validate: {
							notAdmin: (feildValue) => {
								return (
									feildValue !== "admin@test.com" || "You are not an admin"
								);
							},
						},
					})}
				/>

				<p className="pl-1 text-red-600 font-bold">{errors.email?.message}</p>

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
			<DevTool control={control} />
		</div>
	);
};

export default ForgotPassword;
