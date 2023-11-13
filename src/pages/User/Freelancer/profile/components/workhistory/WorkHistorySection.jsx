import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";
import SideBar from "../SideBar";
import FreelancerHeader from "../../../Header/Header";
import WorkHistoryList from "./WorkHistoryList";

const WorkHistory = () => {
  const [leftPanelOpened, setLeftPanelOpened] = useState(false);
  return (
    <div className="">
      <FreelancerHeader />
      <div className="relative top-[100px] flex gap-3 px-[10px] md:px-[80px]">
        <SideBar selectedItem={1} selectedProduct={10} />
        <div className="w-full flex flex-col items-center">
          <div className="w-full mb-4 py-3 px-4  bg-gray-200 text-center">
            <p className="text-2xl font-normal text-slate-800">Work History</p>
          </div>
          <div className="w-full">
            <WorkHistoryList />
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

export default WorkHistory;
