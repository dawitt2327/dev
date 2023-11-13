import React from "react";
import projectImage from "../../../../../../../assets/images/job.png";
import { Link } from "react-router-dom";

const EmptyProjects = () => {
  return (
    <div className="p-4 mt-6">
      <div className="mt-[30px] h-[220px] flex flex-col gap-2 justify-center items-center">
        <img src={projectImage} alt="" className="w-[130px] h-[130px]" />
        <h1 className="text-center text-gray-900 text-2xl text-bold">
          No active projects
        </h1>
        <p className="text-center text-gray-700 w-[400px] md:w-[500px] px-10">
          Create a project to work on.
        </p>
        <Link
          to={"/client/workspace/create-project"}
          className="bg-purple-800 rounded-md p-2 text-white"
        >
          Create project
        </Link>
      </div>
    </div>
  );
};

export default EmptyProjects;
