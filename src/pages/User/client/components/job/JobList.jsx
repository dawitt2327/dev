import React, { useEffect, useState } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { BaseURL } from "../../../../../services/constants/Constants";
import moment from "moment";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const getJobs = async () => {
      try {
        const resp = await axios.get(BaseURL + "jobs/self", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (resp.status === 200) {
          setJobs(resp.data.jobs);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getJobs();
    console.log(jobs);
  }, []);

  return (
    <div className="w-full flex flex-col gap-3 shadow-sm border-2 border-gray-50 rounded-md">
      {jobs.map((job, id) => (
        <div className="flex flex-col justify-between px-4 py-2 border-2 border-gray-100 rounded-md">
          <div className="flex items-center justify-between">
            <p className="text-md md:text-xl">
              {job.title.length > 100
                ? job.title.slice(0, 60) + "..."
                : job.title}
            </p>
            <Link
              to={"/client/jobs/" + job._id}
              className="text-white bg-purple-600 rounded-md px-4 py-2"
            >
              View Detail
            </Link>
          </div>
          <div className="flex gap-4">
            <p className="text-gray-400 text-sm">
              {moment(new Date(job?.updatedAt).toISOString()).fromNow()}
            </p>
            <p className="text-gray-400 text-sm cursor-pointer">
              {job?.pendingworkers?.length} applicants
            </p>
          </div>
        </div>
      ))}
      <div className="mt-2 mb-2 flex gap-x-2 items-center">
        <span className="cursor-pointer">
          <MdOutlineArrowBackIosNew size={20} />
        </span>
        <p className="flex items-center justify-center rounded-md w-[25px] h-[25px] text-white text-md bg-gray-800">
          1
        </p>
        <span className="cursor-pointer">
          <MdOutlineArrowForwardIos size={20} />
        </span>
      </div>
    </div>
  );
};

export default JobList;
