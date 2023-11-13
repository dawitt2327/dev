import React from "react";
import projectImage from "../../../../../assets/images/job.png";
import { Link } from "react-router-dom";

const EmptyJob = () => {
  return (
    <div className="p-4 mt-6">
      <div className="mt-[30px] h-[220px] flex flex-col gap-2 justify-center items-center">
        <img src={projectImage} alt="" className="w-[130px] h-[130px]" />
        <h1 className="text-center text-gray-900 text-2xl text-bold">
          No active job posts
        </h1>
        <p className="text-center text-gray-700 w-[400px] md:w-[500px] px-10">
          Post a job to the marketplace and let talent come to you.
        </p>
        <Link
          to="/post-job"
          className="bg-purple-800 rounded-md p-2 text-white"
        >
          Start Posting
        </Link>
      </div>
    </div>
  );
};

export default EmptyJob;
