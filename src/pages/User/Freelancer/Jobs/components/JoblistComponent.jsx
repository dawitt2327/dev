import React from "react";
import starImg from "../../../../../assets/images/star.png";
import verifiedImg from "../../../../../assets/images/verify.png";
import { Link } from "react-router-dom";
import JobFilterSection from "./JobFilterSection";
import moment from "moment";
import EmptyJobList from "./EmptyJobList";

function JoblistComponent({ jobs = [], setFilters, filters }) {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex gap-10 md:gap-6 w-full">
      <div className="w-1/4 lg:fixed top-[100px] left-[50px] h-[400px] rounded-sm shadow-sm bg-white flex justify-center py-5 px-[10px]">
        <JobFilterSection setFilters={setFilters} filters={filters} />
      </div>
      <div className="relative mb-[200px] ml-[370px] top-[10px] bg-white flex flex-col px-6 py-6 gap-6 w-3/4">
        {jobs.length > 0 ? (
          jobs?.map((job, key) => (
            <div className="job-content flex flex-col gap-3 w-full border-2 border-gray-100 p-5 rounded-lg">
              <div className="grow flex gap-4">
                <div className="grow flex justify-between">
                  <Link to={`/jobs/${job._id}`} className="cursor-pointer ">
                    <div className="flex flex-col sm:flex-row justify-start items-center md:gap-2">
                      <h1 className="text-xl font-bold capitalize">
                        {job.title}
                      </h1>
                    </div>
                    <div className="flex">
                      <p className="text-md text-slate-500">
                        {job.earnings} Birr
                      </p>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2 text-md text-slate-500">
                        posted:
                      </span>

                      <p className="text-sm text-slate-500">
                        {moment(
                          new Date(job?.createdAt).toISOString()
                        ).fromNow()}
                      </p>
                    </div>
                  </Link>
                  <div className="z-99 apply-button hidden md:block">
                    {job.pendingworkers.some((el) => el === user?._id) ? (
                      <Link
                        to={`/jobs/apply/${job._id}`}
                        className="text-sm border-2 border-purple-400 rounded-md p-2 hover:bg-purple-500 hover:text-white cursor-pointer"
                      >
                        View My Application
                      </Link>
                    ) : (
                      <Link
                        to={"/jobs/" + job._id}
                        className="bg-purple-600 py-2 px-3 text-white text-md rounded-lg"
                      >
                        Apply
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              <div className="job-desrcription">
                <h1 className="text-md text-slate-800 md:pr-[110px]">
                  {job.description.length > 300
                    ? job.description.slice(0, 300) + "..."
                    : job.description}
                </h1>
              </div>

              <div className="job-tasks flex flex-wrap justify-start gap-2 items-center">
                {job.requirements?.map((requirement, key) => (
                  <p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-4 text-sm">
                    {requirement}
                  </p>
                ))}
              </div>
              <div className="recruiter-status flex flex-col md:items-center md:flex-row gap-6">
                <div className="payment-verified flex items-center gap-3">
                  <img
                    src={verifiedImg}
                    width={"20px"}
                    height={"20px"}
                    alt=""
                  />
                  <span className="text-slate-500">
                    {job.paymentVerified
                      ? "Payment Verified"
                      : "Payment Unverified"}
                  </span>
                </div>
              </div>
              <div className="md:hidden apply-button w-full mt-2">
                <Link
                  to={"/jobs/" + job._id}
                  className="bg-purple-600 py-2 px-3 text-white text-md rounded-lg"
                >
                  Apply now
                </Link>
              </div>
            </div>
          ))
        ) : (
          <EmptyJobList />
        )}
      </div>
    </div>
  );
}

export default JoblistComponent;
