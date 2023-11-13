import React from "react";
import Header from "./components/Header";
import JobList from "../job/JobList";
import { useState } from "react";
import { useEffect } from "react";
import EmptyJob from "../job/EmptyJob";
import axios from "axios";
import { BaseURL } from "../../../../../services/constants/Constants";

const ClientDashboard = () => {
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
  }, []);
  return (
    <div className="w-full">
      <Header />
      <div className="mt-3">{jobs.length > 0 ? <JobList /> : <EmptyJob />}</div>
    </div>
  );
};

export default ClientDashboard;
