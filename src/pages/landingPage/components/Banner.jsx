import React from "react";
import searchJob from "../../../assets/images/search-job.png";
import applyJob from "../../../assets/images/apply-job.png";
import account from "../../../assets/images/account.png";
import postJob from "../../../assets/images/post-job.png";
const Banner = () => {
  return (
    <div className="block bg-white shadow-lg rounded-lg dark:bg-gray-800 dark:border-gray-700 p-4">
      <h1 className="md:text-4xl text-2xl font-bold py-4 text-slate-800 ">
        What's great about it?
      </h1>
      <div className="px-4 py-8 grid grid-cols-2 md:grid-cols-4  gap-3 justify-between ">
        <div className="px-1 cursor-pointer  shadow-md p-5 bg-white hover:scale-105 transition-all  rounded-lg text-center">
          <img
            className="mx-auto w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
            src={account}
          />

          <a>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-slate-900">
              Browse portfolios
            </h5>
          </a>
          <p className="mb-3 font-normal text-slate-700">
            Find professionals you can trust by browsing their samples of
            previous work and reading their profile reviews.
          </p>
        </div>
        <div className="px-1 cursor-pointer  shadow-md p-5 bg-white hover:scale-105 transition-all  rounded-lg text-center">
          <img
            className="mx-auto w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
            src={searchJob}
          />
          <a>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-slate-800">
              Fast bids
            </h5>
          </a>
          <p className="mb-3 font-normal text-slate-700">
            Receive obligation free quotes from our talented freelancers fast.
            80% of projects get bid on within 60 seconds.
          </p>
        </div>
        <div className="px-1 cursor-pointer  shadow-md p-5 bg-white hover:scale-105 transition-all  rounded-lg text-center">
          <img
            className="mx-auto w-10 h-10 mb-2 text-slate-700"
            src={postJob}
          />
          <a>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Quality work
            </h5>
          </a>
          <p className="mb-3 font-normal text-slate-700">
            colabs.com has by far the largest pool of quality freelancers
            globally- over 60 million to choose from.
          </p>
        </div>
        <div className="px-1 cursor-pointer  shadow-md p-5 bg-white hover:scale-105 transition-all  rounded-lg text-center">
          <img
            className="mx-auto w-10 h-10 mb-2 text-slate-700"
            src={applyJob}
          />
          <a>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Track progress
            </h5>
          </a>
          <p className="mb-3 font-normal text-slate-700">
            Keep up-to-date and on-the-go with our time tracker, and mobile app.
            Always know what freelancers are up to.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
