import React from "react";
import searchJob from "../../assets/images/search-job.png";
import applyJob from "../../assets/images/apply-job.png";
import account from "../../assets/images/account.png";
import postJob from "../../assets/images/post-job.png";
const Activity = () => {
	return (
		<div className="py-4 px-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<h1 className="text-4xl font-bold">Need something done?</h1>

			<div className="px-4 py-8 grid grid-cols-2 md:grid-cols-4  gap-2 justify-between ">
				<div className="px-1 pointer max-w-sm p-5 bg-white hover:border hover:border-purple-200 rounded-lg hover:shadow text-center">
					<img
						className="mx-auto w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
						src={account}
					/>

					<a href="#">
						<h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
							Create Account
						</h5>
					</a>
					<p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
						First you have to create an account here.
					</p>
				</div>
				<div className="px-1 pointer max-w-sm p-5 bg-white hover:border hover:border-purple-200 rounded-lg hover:shadow text-center">
					<img
						className="mx-auto w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
						src={searchJob}
					/>
					<a href="#">
						<h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
							Search Work
						</h5>
					</a>
					<p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
						Search the best freelance work here.
					</p>
				</div>
				<div className="px-1 pointer max-w-sm p-5 bg-white hover:border hover:border-purple-200 rounded-lg hover:shadow text-center">
					<img
						className="mx-auto w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
						src={postJob}
					/>
					<a href="#">
						<h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
							Post Job
						</h5>
					</a>
					<p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
						Post a job or project here.
					</p>
				</div>
				<div className="px-1 pointer max-w-sm p-5 bg-white hover:border hover:border-purple-200 rounded-lg hover:shadow text-center">
					<img
						className="mx-auto w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
						src={applyJob}
					/>
					<a href="#">
						<h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
							Save and Apply
						</h5>
					</a>
					<p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
						Apply or save and start your work.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Activity;
