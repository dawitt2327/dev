import { Block, Navbar, Page, Panel } from "konsta/react";
import { AiFillDashboard, AiOutlineClose } from "react-icons/ai";
import { FaProductHunt, FaUsers } from "react-icons/fa";
import { ImBlogger } from "react-icons/im";
import { BsFillPersonVcardFill } from "react-icons/bs";
import {
  MdAccountBalance,
  MdAccountBox,
  MdAdminPanelSettings,
  MdLogout,
} from "react-icons/md";
import { Link } from "react-router-dom";
const MobileSidebar = ({
  leftPanelOpened,
  setLeftPanelOpened,
  selectedItem,
  selectedProduct,
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
                      ? "border-l-4 border-[#FFA500] bg-gray-100"
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
              <Link to={"/admin/"} className="flex flex-col">
                <button
                  type="button"
                  className={`flex items-center w-full p-2 text-gray-900 transition duration-75 group ${
                    selectedItem == 1
                      ? "border-l-4 border-[#FFA500] bg-gray-100"
                      : ""
                  } `}
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <span>
                    <FaProductHunt size={20} color="gray" />
                  </span>

                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Verification Request
                  </span>
                </button>
              </Link>
              <Link to={"/admin/"} className="flex flex-col">
                <button
                  type="button"
                  className={`flex items-center w-full p-2 text-gray-900 transition duration-75 group ${
                    selectedItem == 1
                      ? "border-l-4 border-[#FFA500] bg-gray-100"
                      : ""
                  } `}
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <span>
                    <FaProductHunt size={20} color="gray" />
                  </span>

                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Dispute Request
                  </span>
                </button>
              </Link>
              <Link to={"/admin/user"}>
                <button
                  type="button"
                  className={`flex items-center w-full p-2 text-gray-900 transition duration-75 group ${
                    selectedItem == 2
                      ? "border-l-4 border-[#FFA500] bg-gray-100"
                      : ""
                  } `}
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <span>
                    <FaUsers size={20} color="gray" />
                  </span>

                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Users
                  </span>
                </button>
              </Link>

              <Link to={"/admin/my-account"}>
                <div
                  className={`flex items-center w-full p-2 text-gray-900 transition duration-75 group ${
                    selectedItem == 4
                      ? "border-l-4 border-[#FFA500] bg-gray-100"
                      : ""
                  } `}
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <span>
                    <FaProductHunt size={20} color="gray" />
                  </span>

                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    My Account
                  </span>
                </div>
                <ul className="flex flex-col ml-4 gap-y-2 pt-2">
                  <Link
                    to={"/admin/my-account"}
                    className={`cursor-pointer flex gap-x-2 items-center ${
                      selectedItem == 4
                        ? "bg-blue-50 px-2 py-1 rounded-sm cursor-pointer"
                        : "px-2 py-1 rounded-sm cursor-pointer"
                    } `}
                  >
                    <span>
                      <MdAdminPanelSettings size={20} color="#FFA500" />
                    </span>{" "}
                    Account setting
                  </Link>

                  <Link
                    to={"/login"}
                    className={`cursor-pointer flex gap-x-2 items-center ${"px-2 py-1 rounded-sm cursor-pointer"} `}
                  >
                    <span>
                      <MdLogout size={20} color="#FFA500" />
                    </span>{" "}
                    logout
                  </Link>
                </ul>
              </Link>
            </ul>
          </div>
        </Block>
      </Page>
    </Panel>
  );
};

export default MobileSidebar;
