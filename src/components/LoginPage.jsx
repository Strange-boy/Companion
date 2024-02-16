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

//for form validation using RHF
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const LoginPage = () => {
	const [logIn, setLogIn] = useState(true);

	const form = useForm();
	const { register, control, handleSubmit, formState, watch } = form;
	const { errors } = formState;
	const passwordValue = watch("password");

	const submitDataForVerification = (data) => {
		console.log("Form data:", data);
	};

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
				onSubmit={handleSubmit(submitDataForVerification)}
				className="px-14 py-10 bg-black absolute w-1/2 lg:w-5/12 xl:w-3/12 xl:px-16 mt-28 right-0 left-0 mx-auto opacity-80 rounded-xl"
				noValidate
			>
				<div className="text-slate-100 font-bold text-3xl mb-8">
					{" "}
					{logIn ? "Sign In" : "Sign Up"}{" "}
				</div>

				{/* in order to enter the name and phone number in sign up page */}
				{!logIn && (
					<>
						<Input
							type="text"
							className="bg-slate-700 text-slate-50 my-4 font-bold text-base py-6 focus:outline-2 focus:outline-slate-50 "
							placeholder="Name"
							{...register("name", {
								required: {
									value: true,
									message: "Name cannot be empty",
								},
							})}
						/>
						<p className="pl-1 text-red-600 font-bold">
							{errors.name?.message}
						</p>
					</>
				)}

				{!logIn && (
					<>
						<Input
							type="tel"
							className="bg-slate-700 text-slate-50 my-4 font-bold text-base py-6 focus:outline-2 focus:outline-slate-50 "
							placeholder="Phone"
							{...register("phone", {
								required: {
									value: true,
									message: "Phone number cannot be empty",
								},
								validate: {
									lessThanTenDigit: (feildValue) => {
										return (
											feildValue.length === 10 ||
											"Phone number is not 10 digits"
										);
									},
								},
							})}
						/>
						<p className="pl-1 text-red-600 font-bold">
							{errors.phone?.message}
						</p>
					</>
				)}

				<Input
					type="email"
					className="bg-slate-700 text-slate-50 my-4 font-bold text-base py-6 focus:outline-2 focus:outline-slate-50"
					placeholder="Email"
					{...register("email", {
						required: {
							value: true,
							message: "Email cannot be empty",
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

				<Input
					type="password"
					className="bg-slate-700 text-slate-50 my-4 font-bold text-base py-6 focus:outline-2 focus:outline-slate-50 "
					placeholder="Password"
					{...register("password", {
						required: {
							value: true,
							message: "Password cannot be empty",
						},
						pattern: {
							value:
								/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*()+=?-_])[a-zA-Z0-9!@#$%&*()+=?-_]{8,12}$/,
							message:
								"Strong password required: Uppercase, lowercase, digit, symbol",
						},
						validate: {
							notAdmin: (value) => {
								return value !== "admin" || "admin privelages denied";
							},
						},
					})}
				/>

				<p className="pl-1 text-red-600 font-bold">
					{errors.password?.message}
				</p>

				{!logIn && (
					<>
						<Input
							type="password"
							className="bg-slate-700 text-slate-50 my-4 font-bold text-base py-6 focus:outline-2 focus:outline-slate-50 "
							placeholder="Confirm Password"
							{...register("confirmPassword", {
								required: {
									value: true,
									message: "Confirm password cannot be empty",
								},
								validate: {
									sameAsPassword: (value) => {
										return value === passwordValue || "password should match";
									},
								},
							})}
						/>
						<p className="pl-1 text-red-600 font-bold">
							{errors.confirmPassword?.message}
						</p>
					</>
				)}

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
			<DevTool control={control} />
		</div>
	);
};

export default LoginPage;
