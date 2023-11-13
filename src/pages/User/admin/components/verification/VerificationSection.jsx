import React, { useState } from "react";
import AdminHeader from "../header/AdminHeader";
import SideBar from "../SideBar";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import VerificationList from "./VerificationList";

const VerificationSection = () => {
  const [leftPanelOpened, setLeftPanelOpened] = useState(false);

  return (
    <div className="h-full">
      <AdminHeader />
      <div className="relative top-[100px] flex gap-3 px-[10px] md:px-[80px]">
        <SideBar selectedItem={1} selectedProduct={10} />
        <div className="w-full mb-[200px]">
          <div className="overflow-x-scroll scrolling-touch">
            <VerificationList />
          </div>
        </div>

        <button
          onClick={() => setLeftPanelOpened(true)}
          title="Filter Scale"
          className="md:hidden fixed z-90 bottom-10 right-8 bg-blue-500 w-[60px] h-[60px] rounded-full drop-shadow-md flex justify-center items-center text-white hover:drop-shadow-2xl duration-300"
        >
          <AiOutlineMenuUnfold color="white" size={"25"} />
        </button>
      </div>
    </div>
  );
};

export default VerificationSection;
