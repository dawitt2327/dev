import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useEffect, useState } from "react";
import MobileSidebar from "../../../MobileSidebar";
import ProjectList from "./components/ProjectList";
import SideBar from "../../../SideBar";
import ClientHeader from "../../../header/ClientHeader";
import { Link } from "react-router-dom";
import axios from "axios";
import { BaseURL } from "../../../../../../services/constants/Constants";
import EmptyProjects from "./components/EmptyProjects";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const getProjects = async () => {
      try {
        const resp = await axios.get(BaseURL + "projects", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (resp.status === 201) {
          setProjects(resp.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, []);
  const [leftPanelOpened, setLeftPanelOpened] = useState(false);
  return (
    <div className="h-full">
      <ClientHeader />
      <div className="relative top-[100px] flex gap-3 px-[10px] md:px-[80px]">
        <SideBar selectedItem={1} />
        {projects.length > 0 ? (
          <div className="w-full mb-[200px]">
            <div className="mb-4">
              <Link
                to={"/client/workspace/create-project"}
                className="w-[170px] flex items-center rounded-md py-1 px-3 bg-purple-600  hover:bg-purple-700 text-white"
              >
                <span>create new project</span>
              </Link>
            </div>
            <div className="overflow-x-scroll scrolling-touch">
              <ProjectList projects={projects} />
            </div>
          </div>
        ) : (
          <div className="w-full">
            <EmptyProjects />
          </div>
        )}

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

export default ProjectSection;
