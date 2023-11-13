import React from "react";
import HeroImage from "../../assets/images/hero-image.png";
const Hero = () => {
  return (
    <div className="md:flex md:justify-between md:p-4 lg:p-6">
      <div className="p-3 md:p-0 md:flex-col md:w-1/2">
        <div className="md:my-5" data-aos="fade-down" data-aos-delay="300">
          <h1 className="text-4xl md:text-5xl text-gray-600 font-semibold">
            Are you looking for top 5% Freelancers?
          </h1>
        </div>
        <div className="my-7">
          <p className="text-gray-800 text-2xl">
            Hire, greate freelancers , fast, colabs helps You hire elite
            freelancers at a moment's noticed.
          </p>
        </div>
        <div className="block md:flex justify-center items-center md:items-start md:py-10"></div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="100"
        className="hidden sm:hidden md:flex md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[450px]"
      >
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
