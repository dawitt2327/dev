import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";
import MobileSidebar from "../../../MobileSidebar";
import ProjectList from "./components/ProjectList";
import SideBar from "../../../SideBar";
import ClientHeader from "../../../header/ClientHeader";
import { Link } from "react-router-dom";
import AddProjectForm from "./components/AddProjectForm";
import { BaseURL } from "../../../../../../services/constants/Constants";
import axios from "axios";
import { data } from "autoprefixer";

const AddProject = () => {
  const [leftPanelOpened, setLeftPanelOpened] = useState(false);
  return (
    <div className="h-full">
      <ClientHeader />
      <div className="relative top-[100px] flex gap-3 px-[10px] md:px-[80px]">
        <SideBar selectedItem={1} />
        <div className="w-full mb-[200px]">
          <AddProjectForm />
        </div>

        <button
          onClick={() => setLeftPanelOpened(!leftPanelOpened)}
          title="Filter Scale"
          className="md:hidden fixed z-90 bottom-10 right-8 bg-blue-500 w-[60px] h-[60px] rounded-full drop-shadow-md flex justify-center items-center text-white hover:drop-shadow-2xl duration-300"
        >
          <AiOutlineMenuUnfold color="white" size={"25"} />
        </button>
      </div>
    </div>
  );
};

export default AddProject;
