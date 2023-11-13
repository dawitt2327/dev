import { AiFillDashboard, AiFillProject } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { SiProgress } from "react-icons/si";

import { Link } from "react-router-dom";

const SideBar = ({ selectedItem, selectedProduct }) => {
  return (
    <div className="hidden h-[400px] w-1/4 shrink-0 md:flex flex-col border border-xsm">
      <aside className="hidden sm:block min-h-screen">
        <div className="px-3 py-4 overflow-y-auto">
          <ul className="flex flex-col space-y-2 font-medium">
            <Link to={"/client/workspace"}>
              <div
                onClick={() => {
                  console.log("dashboard clicked");
                }}
                type="button"
                className={`flex items-center w-full p-2 text-gray-900 transition duration-75 group ${
                  selectedItem == 0
                    ? "border-l-4 border-purple-600 bg-purple-100"
                    : ""
                } `}
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <span>
                  <AiFillDashboard size={20} color="gray" />
                </span>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Dashboard
                </span>
              </div>
            </Link>
            <Link to={"/client/workspace/projects"}>
              <div
                className={`flex items-center w-full p-2 text-gray-900 transition duration-75 group ${
                  selectedItem == 1
                    ? "border-l-4 border-purple-600 bg-purple-100"
                    : ""
                } `}
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <span>
                  <AiFillProject size={20} color="gray" />
                </span>

                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Projects
                </span>
              </div>
            </Link>
            <Link to={"/client/workspace/progress"}>
              <div
                className={`flex items-center w-full p-2 text-gray-900 transition duration-75 group ${
                  selectedItem == 2
                    ? "border-l-4 border-purple-600 bg-purple-100"
                    : ""
                } `}
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <span>
                  <SiProgress size={20} color="gray" />
                </span>

                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Progress
                </span>
              </div>
            </Link>
            <Link to={"/client/workspace/teams"}>
              <div
                className={`flex items-center w-full p-2 text-gray-900 transition duration-75 group ${
                  selectedItem == 3
                    ? "border-l-4 border-purple-600 bg-purple-100"
                    : ""
                } `}
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <span>
                  <FaUsers size={20} color="gray" />
                </span>

                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Teams
                </span>
              </div>
            </Link>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
