import React, { useEffect, useState } from "react";
import ClientHeader from "../../header/ClientHeader";
import { AiOutlineFolderView } from "react-icons/ai";
import profileImg from "../../../../../assets/images/profile.jpg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BaseURL } from "../../../../../services/constants/Constants";
import { ToastContainer, toast } from "react-toastify";

const ApplicationDetail = () => {
  const token = localStorage.getItem("token");
  const { applicationId } = useParams();
  const [application, setApplication] = useState({});
  const notify = (message, type) =>
    toast(message, {
      type,
    });

  const getApplicationInfo = async () => {
    const application = await axios.get(
      BaseURL + "jobs/applications/" + applicationId,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    setApplication(application.data.application);
  };
  useEffect(() => {
    getApplicationInfo();
  }, [applicationId]);

  const handleApplicationAction = async (action) => {
    try {
      const resp = await axios.put(
        BaseURL + "jobs/applications/" + applicationId,
        { action },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (resp.status === 200) {
        notify(resp.data.message, "success");
        getApplicationInfo();
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Server Error pleasr try again";
      notify(errorMessage, "error");
    }
  };
  return (
    <div>
      <ClientHeader />
      <div className="mt-[100px] md:px-[80px] px-[10px]">
        <div className="shadow-sm flex flex-col gap-4 bg-gray-50 p-4">
          <div className="w-full bg-gray-200 p-2 rounded-md flex justify-between items-center">
            <div className="user-name flex gap-2">
              <img
                src={profileImg}
                alt=""
                className="rounded-full w-[50px] h-[50px]"
              />
              <div className="flex ml-2 flex-col">
                <p className="text-xl text-slate-800">
                  {application?.workerId?.firstName +
                    " " +
                    application?.workerId?.lastName}
                </p>
                <p className="text-md text-slate-500">Frontend Developer</p>
              </div>
            </div>
            <div className="">
              <Link
                to=""
                className="text-white bg-purple-600 hover:bg-purple-700 rounded-md px-4 py-2"
              >
                View Kalkidan's Profile
              </Link>
            </div>
          </div>
          <div className="proposal content mt-2">
            <p className="text-md text-slate-800">{application.coverLetter}</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            {application.status === "Pending" ? (
              <div className="flex gap-x-5">
                <Link
                  onClick={() => handleApplicationAction("Accepted")}
                  className="text-white bg-purple-600 hover:bg-purple-700 rounded-md px-4 py-2"
                >
                  Accept
                </Link>
                <Link
                  onClick={() => handleApplicationAction("Rejected")}
                  className="text-white bg-red-500 hover:bg-red-600 rounded-md px-4 py-2"
                >
                  Reject
                </Link>
              </div>
            ) : (
              <div className="flex gap-x-5">
                <Link
                  onClick={() => handleApplicationAction("Accepted")}
                  className="text-white bg-purple-600 hover:bg-purple-700 rounded-md px-4 py-2"
                >
                  {application.status}
                </Link>
              </div>
            )}
            <div className="flex gap-x-5">
              <Link
                to={`/job/applications/list/${application.jobId}`}
                className="text-white bg-gray-500 hover:bg-gray-700 rounded-md px-4 py-2"
              >
                Back to Applications
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ApplicationDetail;
