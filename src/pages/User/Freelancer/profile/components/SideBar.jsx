import { MdOutlineManageAccounts, MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = ({ selectedItem, selectedProduct }) => {
  return (
    <div className="hidden w-1/4 shrink-0 md:flex flex-col border border-xsm h-[400px]">
      <aside className="hidden sm:block min-h-screen">
        <div className="px-3 py-4 overflow-y-auto dark:bg-gray-800">
          <ul className="space-y-4 font-medium">
            <Link to={"/freelancer-get-verified"}>
              <div
                className={`flex items-center w-full p-2 text-gray-900 transition duration-75 group ${
                  selectedItem == 3
                    ? "border-l-4 border-purple-600 bg-gray-100"
                    : ""
                } `}
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <span>
                  <MdVerified size={20} color="gray" />
                </span>

                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Get Verified
                </span>
              </div>
            </Link>

            <Link to={"/freelancer-account-setting"}>
              <div
                className={`flex items-center w-full p-2 text-gray-900 transition duration-75 group ${
                  selectedItem == 5
                    ? "border-l-4 border-purple-600 bg-gray-100"
                    : ""
                } `}
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <span>
                  <MdOutlineManageAccounts size={20} color="gray" />
                </span>

                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  My Account
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
