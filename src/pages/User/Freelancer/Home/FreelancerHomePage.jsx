import React from "react";
import FreelancerHeader from "../Header/Header";
import { LeftSide, RightSide } from "./components/SideComponents";
import MainComponent from "./components/MainComponent";

const FreelancerHomePage = () => {
  return (
    <div className="w-full h-full mt-[50px] px-[5px] md:px-[50px] py-8">
      <FreelancerHeader selectedNav={1} />
      <div className="md:flex gap-5 justify-between">
        <div className="lg:fixed lg:w-[250px] top-[100px] left-[50px]">
          <LeftSide />
        </div>
        <div className="w-full relative left-[280px] top-[20px] lg:w-2/4">
          <MainComponent />
        </div>
        <div className="lg:fixed lg:w-1/4  top-[100px] right-[20px] ">
          {" "}
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default FreelancerHomePage;
