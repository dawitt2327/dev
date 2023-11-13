import React from "react";
import { Link } from "react-router-dom";
import projectImage from "../../../../../assets/images/job.png";

const EmptyJobList = () => {
  return (
    <div className="p-4 mt-6 mx-auto">
      <div className="mt-[30px] h-[220px] flex flex-col gap-2 justify-center items-center">
        <img src={projectImage} alt="" className="w-[130px] h-[130px]" />
        <h1 className="text-center text-gray-900 text-2xl text-bold">
          No active job posts found!
        </h1>
      </div>
    </div>
  );
};

export default EmptyJobList;
