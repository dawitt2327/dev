import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { SiMoneygram, SiOpenproject } from "react-icons/si";
import axios from "axios";
import { BaseURL } from "../../../../../../services/constants/Constants";

const DashboardContent = () => {
  const [dashboardData, setDashboardData] = useState({
    totalApplied: 0,
    totalGained: 0,
    totalHired: 0,
    activeProjects: [],
    completedProjects: [],
  });
  const token = localStorage.getItem("token");

  const getDashboardData = async () => {
    try {
      const res = await axios.get(BaseURL + "users/dashboard/freelancer", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        setDashboardData({
          totalGained: res.data.totalGained,
          totalHired: res.data.totalHired,
          totalApplied: res.data.totalApplied,
          activeProjects: res.data.activeProjects,
          completedProjects: res.data.completedProjects,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="w-full rounded-md px-6 flex flex-col gap-2">
      <div className="grid gap-4 grid-cols-3 justify-center">
        <div className="bg-purple-50 shadow-md rounded-md p-4">
          <div className="cursor-pointer flex flex-col items-center gap-6">
            <div className="flex flex-col gap-2 items-center">
              <SiMoneygram className="text-purple-700" size={35} />
              <h1 className="text-2xl font-medium">Total Gained</h1>
            </div>
            <h1 className="text-xl font-medium">
              {dashboardData.totalGained} ETB
            </h1>
          </div>
        </div>
        <div className="bg-purple-50 shadow-md rounded-md p-4">
          <div className="cursor-pointer flex flex-col items-center gap-6">
            <div className="flex flex-col gap-2 items-center">
              <FaUsers className="text-purple-700" size={35} />
              <h1 className="text-2xl font-medium">Total Hired</h1>
            </div>
            <h1 className="text-xl font-medium">
              {dashboardData.totalHired}{" "}
              <span className="text-md font-medium">Jobs</span>{" "}
            </h1>
          </div>
        </div>
        <div className="bg-purple-50 shadow-md rounded-md p-4">
          <div className="cursor-pointer flex flex-col items-center gap-6">
            <div className="flex flex-col gap-2 items-center">
              <FaUsers className="text-purple-700" size={35} />
              <h1 className="text-2xl font-medium">Total Applied Jobs</h1>
            </div>
            <h1 className="text-xl font-medium">
              {dashboardData.totalApplied}{" "}
              <span className="text-md font-medium">Jobs</span>{" "}
            </h1>
          </div>
        </div>
        <div className="bg-purple-50 shadow-md rounded-md p-4">
          <div className="cursor-pointer flex flex-col items-center gap-6">
            <div className="flex flex-col gap-2 items-center">
              <SiOpenproject className="text-purple-700" size={35} />
              <h1 className="text-2xl font-medium">Active Projects </h1>
            </div>
            <h1 className="text-xl font-medium">
              {dashboardData.activeProjects.length}{" "}
              <span className="text-md font-medium">Projects</span>
            </h1>
          </div>
        </div>
        <div className="bg-purple-50 shadow-md rounded-md p-4">
          <div className="cursor-pointer flex flex-col items-center gap-6">
            <div className="flex flex-col gap-2 items-center">
              <SiOpenproject className="text-purple-700" size={35} />
              <h1 className="text-2xl font-medium">Completed Projects </h1>
            </div>
            <h1 className="text-xl font-medium">
              {dashboardData.completedProjects.length}{" "}
              <span className="text-md font-medium">Projects</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
