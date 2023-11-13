import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Activity from "./components/Activity";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
import LandingPageHeader from "./Header/LandingPageHeader";
import Hero from "./components/Hero";
import Faqs from "./components/Faqs";
import SectionTitle from "./components/SectionTitle";
import Aos from "aos";

const LandingHomePage = () => {
  const type = JSON.parse(localStorage.getItem("user"))?.type;
  const hasToken = Boolean(localStorage.getItem("token"));

  useEffect(() => {
    if (hasToken) {
      if (type === "Freelancer") {
        window.location.href = "/freelancer";
      }
      if (type === "Employer") {
        window.location.href = "/client";
      }
    }
  }, []);
  Aos.init({
    duration: 1800,
    offset: 100,
  });

  return (
    <div className="overflow-hidden">
      <LandingPageHeader selectedNav={1} />
      <div className="sm:container relative top-[100px]">
        <Hero />
        <Activity />
        <div className="m-10"></div>
        <Carousel />
        <div className="m-10"></div>
        <Banner />
        <div className="m-10"></div>
        <SectionTitle
          pretitle=""
          title="Frequently Asked Questions"
        ></SectionTitle>
        <Faqs />
        {/* <div className="m-10"></div>
        <Contact /> */}
        <div className="m-10"></div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingHomePage;
