import React from "react";
import searchJob from "../../../assets/images/search-job.png";
import applyJob from "../../../assets/images/apply-job.png";
import account from "../../../assets/images/account.png";
import postJob from "../../../assets/images/post-job.png";
const Activity = () => {
  return (
    <div className="py-4 px-3 bg-white shadow-md rounded-lg">
      <h1 className="md:text-4xl text-2xl font-bold text-slate-800">
        Need something done?
      </h1>

      <div className="px-4 py-8 grid grid-cols-2 md:grid-cols-4  gap-4 justify-between ">
        <div className="px-1 cursor-pointer  shadow-md p-5 bg-white hover:scale-105 transition-all  rounded-lg text-center">
          <img
            className="mx-auto w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
            src={account}
          />

          <a>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-slate-800">
              Create Account
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            First you have to create an account here.
          </p>
        </div>
        <div className="px-1 cursor-pointer  shadow-md p-5 bg-white hover:scale-105 transition-all  rounded-lg text-center">
          <img
            className="mx-auto w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
            src={searchJob}
          />
          <a>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-slate-800">
              Search Work
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Search the best freelance work here.
          </p>
        </div>
        <div className="px-1 cursor-pointer  shadow-md p-5 bg-white hover:scale-105 transition-all  rounded-lg text-center">
          <img
            className="mx-auto w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
            src={postJob}
          />
          <a>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-slate-800">
              Post Job
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            Post a job or project here.
          </p>
        </div>
        <div className="px-1 cursor-pointer  shadow-md p-5 bg-white hover:scale-105 transition-all  rounded-lg text-center">
          <img
            className="mx-auto w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
            src={applyJob}
          />
          <a>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-slate-800">
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
