import React from "react";
import HeroImage from "../../../assets/images/hero-image.png";
const Hero = () => {
  return (
    <div className="md:flex md:justify-between md:p-4 lg:p-6">
      <div className="p-3 md:p-0 md:flex-col md:w-1/2">
        <div className="md:my-5">
          <h1 className="text-slate-800 text-3xl md:text-5xl font-bold tracking-normal text-center md:text-left">
            Are you looking for top 5% Freelancers?
          </h1>
        </div>
        <div className="my-7">
          <p className="text-gray-800 text-2xl text-center md:text-left">
            Hire, greate freelancers , fast, colabs helps You hire elite
            freelancers at a moment's noticed.
          </p>
        </div>
      </div>
      <div className="hidden sm:hidden md:flex md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[450px]">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
