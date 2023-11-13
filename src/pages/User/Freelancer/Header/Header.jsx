import React, { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import logo from "../../../../assets/images/logo.png";
import avatar from "../../../../assets/images/avatar.png";
import { navLinks } from "./navItems";
import { Link } from "react-router-dom";
import user from "../../../../assets/images/profile.jpg";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseURL } from "../../../../services/constants/Constants";

function FreelancerHeader({ selectedNav }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("type");
    navigate("/login");
  };

  const token = localStorage.getItem("token");
  const [user, setUser] = useState({});
  const fetchUser = async () => {
    try {
      const res = await axios.get(BaseURL + "users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        setUser(res.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const ref = useRef();
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-100 via-purple-300 to-pink-50 z-20">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-[50px]">
          <div className="flex items-center justify-between h-16">
            <div className="flex md:gap-[80px] gap-6 justify-around items-center align-center">
              <Link className="flex items-center gap-2" to={"/"}>
                <img
                  className="w-[40px] h-[40px] md:h-[50px] sm:w-[50px]"
                  src={logo}
                  alt=""
                />
                <p className="text-2xl font-medium text-gray-800">COLABS</p>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {user?.type !== "Employer" &&
                  navLinks.map((value) => (
                    <Link
                      to={value.to}
                      key={value.id}
                      onClick={() => {}}
                      className={`${
                        selectedNav == value.id
                          ? "cursor-pointer flex flex-col justify-center items-center p-2 border-b-2 border-purple-800 text-gray-800"
                          : "cursor-pointer flex flex-col justify-center items-center p-2 border-b-2 border-transparent hover:border-purple-800 hover:text-gray-800"
                      }`}
                    >
                      <span>
                        <img
                          className="h-[20px] w-[20px]"
                          src={value.icon}
                          alt="icon"
                        />
                      </span>

                      <a className={value.className}>{value.name}</a>
                    </Link>
                  ))}
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
                        {user?.imageUrl ? (
                          <img
                            className="h-[35px] w-[35px] rounded-full border-2 border-purple-600"
                            src={user?.imageUrl}
                            alt="icon"
                          />
                        ) : (
                          <img
                            className="h-[35px] w-[35px] rounded-full border-2 border-purple-600"
                            src={avatar}
                            alt="icon"
                          />
                        )}
                      </Link>
                      <span>
                        <BsChevronDown size={12} color="purple" />
                      </span>
                    </div>
                    <ul
                      className={`bg-white absolute w-40 py-2 mt-[120px] rounded-lg shadow-xl ${
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

export default FreelancerHeader;
