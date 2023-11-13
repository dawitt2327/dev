import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FreelancerHeader from "../../Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BaseURL } from "../../../../../services/constants/Constants";
import TakeRequiredSvtPopup from "./TakeRequiredSvtPopup";

const JobDetail = () => {
  const [job, setJob] = useState({});
  const { jobId } = useParams();
  const url = "jobs/detail/" + jobId;
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const getJobDetail = async () => {
      try {
        const resp = await axios.get(BaseURL + url);
        if (resp.status === 200) {
          setJob(resp.data.job);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getJobDetail();
  }, []);

  return (
    <div className="relative w-full">
      <FreelancerHeader selectedNav={2} />
      {job && (
        <div className="mt-[100px] md:px-[80px] px-[10px]">
          <div className="shadow-md flex gap-4 p-4">
            <div className="w-3/4 flex flex-col">
              <p className="text-xl">{job.title}</p>
              <p className="text-md py-2 text-gray-600">
                {job?.description?.length > 300
                  ? job?.description?.slice(0, 300) + "..."
                  : job?.description}
              </p>
              <p className="text-xl py-2">Skills</p>
              <div className="job-tasks flex flex-wrap justify-start gap-2 items-center">
                {job?.requirements?.map((requirement, key) => (
                  <p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-4 text-sm">
                    {requirement}
                  </p>
                ))}
              </div>
              <div className="job-tasks flex flex-wrap justify-start gap-2 items-center">
                <p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-4 text-sm">
                  Html
                </p>
                <p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-4 text-sm">
                  CSS
                </p>
                <p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-4 text-sm">
                  Javascript
                </p>
              </div>
              <div className="mt-4 flex gap-4 border-t-2 border-gray-100 py-2">
                <p className="text-md text-gray-600">
                  Budget: <span>{job.earnings} ETB</span>
                </p>
              </div>
            </div>
            <div className="relative w-1/4 h-[200px] flex flex-col items-center bg-gray-200 p-4 rounded-lg border-2 border-white">
              <p className="text-xl text-slate-800">Activity on this job</p>
              <span className="w-full h-[2px] my-2 bg-white"></span>
              <div className="w-full grow overflow-auto">
                <p className="text-slate-800 text-sm">
                  Applications:{job?.pendingworkers?.length}+
                </p>
              </div>
              <div className="absolute bottom-[5px] bg-gray-200 w-full flex justify-center py-1">
                {job?.pendingworkers?.some((userId) => userId === user?._id) ? (
                  <p>Already applied</p>
                ) : (
                  <Link
                    to={`/jobs/apply/${jobId}`}
                    className="text-md text-gray-600 rounded-md text-white bg-purple-500 hover:bg-purple-600 px-4 py-2"
                  >
                    Apply Now
                  </Link>
                )}
              </div>
              {job?.requiredSkills && (
                <div className="absolute bottom-[5px] bg-gray-200 w-full flex justify-center py-1">
                  <TakeRequiredSvtPopup />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetail;
