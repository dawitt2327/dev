import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useEffect, useState } from "react";
import SideBar from "../../../SideBar";
import ClientHeader from "../../../header/ClientHeader";
import TeamList from "./TeamList";
import EmptyProjects from "../project/components/EmptyProjects";
import axios from "axios";
import { BaseURL } from "../../../../../../services/constants/Constants";

const TeamSection = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const getProjects = async () => {
      try {
        const resp = await axios.get(BaseURL + "users/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (resp.status === 200) {
          setProjects(resp.data.projects);
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
        <SideBar selectedItem={3} />
        {projects.length > 0 ? (
          <div className="w-full mb-[200px]">
            <div className="overflow-x-scroll scrolling-touch">
              <TeamList projects={projects} />
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

export default TeamSection;
