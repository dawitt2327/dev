import React from "react";
import AuthHeader from "../AuthHeader";
import emailImg from "../../../assets/images/email.png";
import { Link, useNavigate } from "react-router-dom";
import AuthFooter from "../AuthFooter";

const ForgotPassword = () => {
	const navigate = useNavigate();
	return (
		<>
			<AuthHeader />
			<section className="mb-[50px] mt-[80px]">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
					<div className="w-full h-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<img src={emailImg} alt="" className="w-[150px] mx-auto" />
							<h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Update your password
							</h1>
							<p className="text-center text-sm leading-tight tracking-tight text-gray-900 md:text-lg dark:text-white">
								Enter your username or email address and select Send Email.
							</p>
							<form className="space-y-4 md:space-y-6" action="#">
								<div>
									<label
										htmlFor="email"
										className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
									>
										Username or Email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="name@gmail.com"
										required=""
									/>
								</div>
								<button
									onClick={() => navigate("/resetpassword")}
									type="submit"
									className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
								>
									Send Email
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
			<div className="mt-5">
				<AuthFooter />
			</div>
		</>
	);
};

export default ForgotPassword;
