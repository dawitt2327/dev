import React from "react";
import { useNavigate } from "react-router-dom";
import ClientHeader from "../header/ClientHeader";
import ClientDashboard from "../components/dashboard/ClientDashboard";

const ClientHomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <ClientHeader />
      <div className="mt-[100px] mx-auto md:px-[80px] lg:px-[100px]">
        <ClientDashboard />
      </div>
    </div>
  );
};

export default ClientHomePage;
