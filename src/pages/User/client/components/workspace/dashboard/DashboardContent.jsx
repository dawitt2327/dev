import { FaUsers } from "react-icons/fa";
import { SiMoneygram, SiOpenproject } from "react-icons/si";
import { useEffect, useState } from "react";
import axios from "axios";
import { BaseURL } from "../../../../../../services/constants/Constants";
import { BsSignpost2Fill } from "react-icons/bs";

const DashboardContent = () => {
  const token = localStorage.getItem("token");
  const [dashboardData, setDashboardData] = useState({
    jobs: [],
    hiredWorkers: [],
    projects: [],
    totalSpent: 0,
  });
  const getDashbordData = async () => {
    try {
      const resp = await axios.get(BaseURL + "users/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (resp.status === 200) {
        setDashboardData(resp.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDashbordData();
  }, []);

  return (
    <div className="w-full rounded-md px-6 flex flex-col gap-2">
      <div className="grid gap-4 grid-cols-2 justify-center">
        <div className="bg-purple-50 shadow-md rounded-md p-4">
          <div className="cursor-pointer flex flex-col items-center gap-3">
            <div className="flex flex-col gap-2 items-center">
              <SiMoneygram className="text-purple-700" size={35} />
              <h1 className="text-2xl font-medium">Total Spent</h1>
            </div>
            <h1 className="text-xl font-medium">
              {dashboardData.totalSpent} ETB
            </h1>
          </div>
        </div>
        <div className="bg-purple-50 shadow-md rounded-md p-4">
          <div className="cursor-pointer flex flex-col items-center gap-3">
            <div className="flex flex-col gap-2 items-center">
              {" "}
              <FaUsers className="text-purple-700" size={35} />
              <h1 className="text-2xl font-medium">Total Hire</h1>
            </div>
            <h1 className="text-xl font-medium">
              {dashboardData.hiredWorkers.length}{" "}
              <span className="text-md font-medium">Freelancers</span>{" "}
            </h1>
          </div>
        </div>
        <div className="bg-purple-50 shadow-md rounded-md p-4">
          <div className="cursor-pointer flex flex-col items-center gap-3">
            <div className="flex flex-col gap-2 items-center">
              {" "}
              <BsSignpost2Fill className="text-purple-700" size={35} />
              <h1 className="text-2xl font-medium">Total Job Post </h1>
            </div>
            <h1 className="text-xl font-medium">
              {dashboardData.jobs.length}{" "}
              <span className="text-md font-medium">Jobs</span>
            </h1>
          </div>
        </div>
        <div className="bg-purple-50 shadow-md rounded-md p-4">
          <div className="cursor-pointer flex flex-col items-center gap-3">
            <div className="flex flex-col gap-2 items-center">
              {" "}
              <SiOpenproject className="text-purple-700" size={35} />
              <h1 className="text-2xl font-medium">Total Projects</h1>
            </div>
            <h1 className="text-xl font-medium">
              {dashboardData.projects.length}{" "}
              <span className="text-md font-medium">Projects</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
