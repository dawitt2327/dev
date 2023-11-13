import React, { useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { BaseURL } from "../../../services/constants/Constants";

const VerificationSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigateTo = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    const type = searchParams.get("type");
    localStorage.setItem("token", token);
    localStorage.setItem("type", type);

    const getUserProfile = async () => {
      try {
        const resp = await axios.get(BaseURL + "users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (resp.status === 200) {
          localStorage.setItem("user", JSON.stringify(resp.data.user));
          if (resp.data.user.isVerified) {
            skipCompleteProfile();
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUserProfile();
  }, []);

  const skipCompleteProfile = () => {
    const type = localStorage.getItem("type");
    if (type === "Freelancer") {
      navigateTo("/feeds");
    } else if (type === "Employer") {
      navigateTo("/client");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen flex-col gap-3">
      <div className="p-1 rounded shadow-lg bg-gradient-to-r from-purple-500 via-green-500 to-blue-500">
        <div className="flex flex-col items-center p-4 space-y-2 bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-600 w-28 h-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-4xl font-bold font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Verified Successfuly!
          </h1>
          {/* <p>Thank you for your interest! will redirect you in 5 sec.</p> */}
        </div>
      </div>
      <div className="flex justify-around items-center">
        <Link
          className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring"
          to={"/profile-setting"}
        >
          Complete profile
        </Link>
        <span className="text-2xl px-3">or</span>
        <button
          className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring"
          onClick={skipCompleteProfile}
        >
          Skip
        </button>
      </div>
    </div>
  );
};

export default VerificationSuccess;
