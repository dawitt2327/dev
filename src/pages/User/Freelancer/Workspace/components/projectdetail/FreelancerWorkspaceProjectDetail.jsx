import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useState, useEffect } from "react";
import FreelancerWorkspaceHeader from "../../header/FreelancerWorkspaceHeader";
import ProjectDetailBody from "./ProjectDetailBody";
import ProjectDetailSidebar from "./ProjectDetailSidebar";
import ProjectDetailRightSide from "./ProjectDetailRightSide";
import axios from "axios";
import { BaseURL } from "../../../../../../services/constants/Constants";
import { useParams } from "react-router-dom";

const FreelancerWorkspaceProjectDetail = () => {
  const [leftPanelOpened, setLeftPanelOpened] = useState(false);
  const [trees, setTrees] = useState({});
  const [contents, setContents] = useState([]);
  const [content, setContent] = useState("");
  const [fileIndex, setFileIndex] = useState(1);
  const params = useParams();

  //TODO: Upload and manage files from project
  useEffect(()=>{
    const getProject = async () =>{
      const response = await axios.get(
        `${BaseURL}workspaces/projects/${params.id}`
      );

      return response.data;
    }
      
    getProject().then((value)=>{
      console.log(value);
      setContents(value['contents']['data']);
      setTrees(value['trees']['data']);
    })
  },[])
  return (
    <div className="h-full">
      <FreelancerWorkspaceHeader />
      <div className="relative top-[70px] flex gap-3 px-[10px] md:px-[10px]">
        <ProjectDetailSidebar selectedItem={1} trees={trees} setFileIndex={setFileIndex}/>
        <div className="w-full mb-[200px] grow">
          <div className="overflow-x-scroll scrolling-touch">
            <ProjectDetailBody setContent={setContent} loadedContent={(contents) ? contents[fileIndex] : []} content={content}/>
          </div>
        </div>
        <ProjectDetailRightSide projectName={params.projectName} content={content} projectId={params.id} fileName={(contents[fileIndex]) ? contents[fileIndex].name : ''} />

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

export default FreelancerWorkspaceProjectDetail;
