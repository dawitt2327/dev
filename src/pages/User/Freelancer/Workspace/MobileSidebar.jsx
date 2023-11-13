import { Block, Navbar, Page, Panel } from "konsta/react";
import { AiFillDashboard, AiFillProject, AiOutlineClose } from "react-icons/ai";
import { FaProductHunt, FaUsers } from "react-icons/fa";
import { SiProgress } from "react-icons/si";

import { Link } from "react-router-dom";
const MobileSidebar = ({
  leftPanelOpened,
  setLeftPanelOpened,
  selectedItem,
}) => {
  return (
    <Panel
      side="left"
      opened={leftPanelOpened}
      onBackdropClick={() => setLeftPanelOpened(false)}
    >
      <Page>
        <Navbar
          title=""
          right={
            <Link navbar onClick={() => setLeftPanelOpened(false)}>
              <AiOutlineClose color="red" size={25} />
            </Link>
          }
        />
        <Block className="">
          <div className="px-2 overflow-y-auto dark:bg-gray-800">
            <ul className="flex flex-col font-medium">
              <Link to={"/admin"}>
                <button
                  type="button"
                  className={`flex items-center w-full p-2 text-gray-900 transition duration-75 group ${
                    selectedItem == 0
                      ? "border-l-4 border-purple-600 bg-gray-100"
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
                </button>
              </Link>
              <Link to={"/admin/products/card"} className="flex flex-col">
                <button
                  type="button"
                  className={`flex items-center w-full p-2 text-gray-900 transition duration-75 group ${
                    selectedItem == 1
                      ? "border-l-4 border-purple-600 bg-gray-100"
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
                </button>
              </Link>
              <Link to={"/client/wrokspace/Teams"}>
                <button
                  type="button"
                  className={`flex items-center w-full p-2 text-gray-900 transition duration-75 group ${
                    selectedItem == 2
                      ? "border-l-4 border-purple-600 bg-gray-100"
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
                </button>
              </Link>
              <Link to={"/client/wrokspace/Teams"}>
                <button
                  type="button"
                  className={`flex items-center w-full p-2 text-gray-900 transition duration-75 group ${
                    selectedItem == 3
                      ? "border-l-4 border-purple-600 bg-gray-100"
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
                </button>
              </Link>
            </ul>
          </div>
        </Block>
      </Page>
    </Panel>
  );
};

export default MobileSidebar;
