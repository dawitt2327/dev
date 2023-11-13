import React, { useEffect, useState } from "react";
import ClientHeader from "../../header/ClientHeader";
import { AiOutlineFolderView } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BaseURL } from "../../../../../services/constants/Constants";

const ClientJobDetail = () => {
  const token = localStorage.getItem("token");
  const { jobId } = useParams();
  const [job, setJob] = useState({});
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const jobDetail = async () => {
      try {
        const job = await axios.get(BaseURL + "jobs/detail/" + jobId);
        const applications = await axios.get(
          BaseURL + "jobs/applications/list/" + jobId,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        setJob(job.data.job);
        setApplications(applications.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    jobDetail();
  }, []);
  return (
    <div>
      <ClientHeader />
      <div className="mt-[100px] md:px-[80px] px-[10px]">
        {job && (
          <div className="shadow-sm flex gap-4 bg-gray-50 p-4">
            <div className="w-3/4 flex flex-col">
              <p className="text-xl">
                {" "}
                {job?.title?.length > 100
                  ? job?.title?.slice(0, 60) + "..."
                  : job?.title}
              </p>
              <p className="text-md py-2 text-gray-600">
                {job?.description?.length > 300
                  ? job?.description?.slice(0, 300) + "..."
                  : job?.description}
              </p>

              <p className="text-xl pt-4 pb-2">Required Skills</p>
              <div className="job-tasks flex flex-wrap justify-start gap-2 items-center">
                {job?.requirements?.map((skill) => (
                  <p className="bg-purple-100 rounded-[20px] text-slate-600 py-2 px-4 text-sm">
                    {skill}
                  </p>
                ))}
              </div>
              <div className="mt-4 flex gap-4 border-t-2 border-gray-100 py-2">
                <p className="text-md text-gray-600">
                  Budget: <span>{job?.earnings} ETB</span>
                </p>
                <p className="text-md text-gray-600 cursor-pointer">
                  Proposals: <span>{applications?.length}+</span>
                </p>
              </div>
            </div>
            <div className="relative w-1/4 h-[400px] flex flex-col items-center bg-gray-200 p-4 rounded-lg border-2 border-white">
              <p className="text-xl text-slate-800">
                Applicants({applications?.length})
              </p>
              <span className="w-full h-[2px] my-2 bg-white"></span>
              <div className="w-full grow overflow-auto">
                {applications?.length > 0 &&
                  applications?.map((application, id) => (
                    <Link
                      to={`/job-applications/${jobId}/${application._id}`}
                      className="cursor-pointer flex px-2 items-center border-b-[1px] border-purple-300"
                    >
                      <p className="grow text-blue-600 text-lg my-1">
                        {application?.worker?.firstName +
                          " " +
                          application?.worker?.lastName}
                      </p>
                      <span className="w-[15px] ">
                        <AiOutlineFolderView color="purple" size={20} />
                      </span>
                    </Link>
                  ))}
              </div>
              <div className="absolute bottom-[5px] bg-gray-200 w-full flex justify-center py-1">
                <Link
                  to={`/job/applications/list/${jobId}`}
                  className="text-md text-gray-600 rounded-md text-white bg-purple-500 hover:bg-gray-700 px-4 py-2"
                >
                  View All Applications
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientJobDetail;
