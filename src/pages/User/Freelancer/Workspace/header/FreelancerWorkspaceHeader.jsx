import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import logo from "../../../../../assets/images/logo.png";
import clientImg from "../../../../../assets/images/clientImg.png";
import { Link } from "react-router-dom";
// import user from "../../../../../assets/images/avatar.png";
import { MdNotifications } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import userPhoto from "../../../../../assets/images/photo.png";
import axios from "axios";
import { BaseURL } from "../../../../../services/constants/Constants";

function FreelancerWorkspaceHeader({ selectedNav }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login");
  };
  const ref = useRef();
  const token = localStorage.getItem("token");
  const fetchUser = async () => {
    try {
      const res = await axios.get(BaseURL + "users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        setUser({
          firstName: res.data.user.firstName,
          lastName: res.data.user.lastName,
          email: res.data.user.email,
          password: res.data.user.password,
          bio: res.data.user.bio,
          occupation: res.data.user.occupation,
          skills: res.data.user.skills,
          imageUrl: res.data.user.imageUrl,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-100 via-purple-300 to-pink-50 z-20 px-[40px]">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between md:justify-between h-16">
            <div className="flex md:gap-[80px] gap-6 justify-around items-center align-center">
              <Link to="/feeds">
                <img
                  className="w-[40px] h-[40px] md:h-[50px] sm:w-[50px]"
                  src={logo}
                  alt="Workflow"
                />
              </Link>
            </div>
            <div className="flex gap-x-6">
              <div
                onMouseLeave={() => setOpenDropdown(false)}
                onMouseOver={() => setOpenDropdown(true)}
                onClick={() => {}}
                className={
                  "relative cursor-pointer flex flex-col gap-y-2 justify-center items-center p-2 hover:text-gray-800"
                }
              >
                <div className="z-99 flex gap-x-2 justify-center items-center">
                  <Link to="/profile-setting" className={""}>
                    {user && (
                      <img
                        className="h-[35px] w-[35px] rounded-full border-2 border-purple-600"
                        src={user.imageUrl}
                        alt="icon"
                      />
                    )}
                  </Link>
                  <span>
                    <BsChevronDown size={12} color="purple" />
                  </span>
                </div>
                <ul
                  className={`bg-white absolute w-40 py-2 mt-[125px] rounded-lg shadow-xl ${
                    openDropdown ? "block" : "hidden"
                  }`}
                >
                  <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
                    <Link to="/profile-setting">Profile setting</Link>
                  </li>

                  <li
                    onClick={logoutHandler}
                    className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    <button>Logout</button>
                    <AiOutlineLogout />
                  </li>
                </ul>
              </div>
            </div>

            <div className="mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-purple-700 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-800 focus:ring-purple"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {() => (
            <div className="bg-white md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="text-gray-600 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="/jobs"
                  className="text-gray-600 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Jobs
                </a>

                <a
                  href="/messaging"
                  className="text-gray-600 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Messaging
                </a>

                <a
                  href="/notification"
                  className="text-gray-600 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Notofication
                </a>

                <a
                  href="/workspace"
                  className="text-gray-600 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Workspace
                </a>
                <a
                  href="/profile"
                  className="text-gray-600 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Profile
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default FreelancerWorkspaceHeader;
