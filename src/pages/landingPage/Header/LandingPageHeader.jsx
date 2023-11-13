import React, { useState, useRef } from "react";
import logo from "../../../assets/images/logo.png";
import { useNavigate, Link } from "react-router-dom";
import { navLinks } from "./navLinks";
import { Transition } from "@headlessui/react";

const LandingPageHeader = ({ selectedNav }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const [selected, setselcted] = useState(1);
  return (
    <nav className="bg-gradient-to-r from-pink-100 via-purple-300 to-purple-200 transition-all fixed w-full z-20 top-0 left-0 py-5 px-2 md:p-0">
      <div className="p-3 flex flex-wrap items-center justify-between md:justify-around mx-auto">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} className="h-[45px] w-[45px]" alt="Colabs Logo" />
          <p className="font-semibold text-3xl text-slate-600">COLABS</p>
        </Link>
        <div className="flex md:order-2">
          <button
            onClick={() => navigate("/signup")}
            type="button"
            className="md:hidden text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mx-3 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Sign Up
          </button>

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
        <div
          className="items-center md:justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:items-center items-start p-2 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            {navLinks.map((value) => (
              <li onClick={() => setselcted(value.id)} key={value.id}>
                <Link
                  to={value.to}
                  className={
                    selected == value.id
                      ? value.className +
                        //border border-b-2
                        "border-purple-800 text-purple-900 text-lg font-bold pb-1"
                      : value.className
                  }
                >
                  {value.name}
                </Link>
              </li>
            ))}
            <ul className="flex justify-between">
              <Link to={"/login"}>
                <li className="mr-2 px-3 py-2 rounded-lg cursor-pointer">
                  Log In
                </li>
              </Link>

              <Link
                to={"/signup"}
                type="button"
                className="hidden md:block text-dark rounded-lg border-2   focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  mx-3 md:mr-0 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              >
                Sign Up
              </Link>
            </ul>
          </ul>
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
                href="/"
                className="text-gray-600 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Find Freelancer
              </a>

              <a
                href="/"
                className="text-gray-600 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Find Job
              </a>

              <a
                href="/signup"
                className="text-gray-600 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                SingIn
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default LandingPageHeader;
