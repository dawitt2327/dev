import React, { useState, useEffect, useRef } from "react";
import { Transition } from "@headlessui/react";
import logo from "../../../../assets/images/logo.png";
import { navLinks } from "./navItems";
import { Link } from "react-router-dom";
import user from "../../../../assets/images/profile.jpg";
import { AiFillCaretDown } from "react-icons/ai";

function FreelancerHeader({ selectedNav }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-white z-20">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between md:justify-around h-16">
            <div className="flex md:gap-[80px] gap-6 justify-around items-center align-center">
              <Link to="/">
                <img
                  className="w-[40px] h-[40px] md:h-[50px] sm:w-[50px]"
                  src={logo}
                  alt="Workflow"
                />
              </Link>
              <form className="hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pr-2">
                    <span className="cursor-pointer">
                      <svg
                        aria-hidden="true"
                        className="ml-3 w-6 h-6 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block sm:hidden lg:block  lg:w-[230px] xl:w-[300px] p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                    placeholder="Search Jobs, Projects, Freelancer..."
                  />
                </div>
              </form>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((value) => (
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
                <div className="flex flex-col items-center">
                  <span>
                    <img className="h-[20px] w-[20px]" src={user} alt="icon" />
                  </span>
                  <div className="flex gap-x-2">
                    <a className="text-sm text-gray-800 cursor-pointer">
                      Profile
                    </a>
                    <span className="cursor-pointer">
                      <AiFillCaretDown size={20} color="purple" />
                    </span>
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

export default FreelancerHeader;
