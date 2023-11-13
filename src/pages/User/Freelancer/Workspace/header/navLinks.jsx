import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";

export const JobItem = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div
      onMouseLeave={() => setOpenDropdown(false)}
      // to={value.to}
      onMouseOver={() => setOpenDropdown(true)}
      // key={value.id}
      onClick={() => {}}
      className={
        "relative cursor-pointer flex flex-col gap-y-2 justify-center items-center p-2 hover:text-gray-800"
      }
    >
      <div className="z-99 flex gap-x-2 justify-center items-center">
        <a className={""}>Jobs</a>
        <span>
          <BsChevronDown size={12} color="purple" />
        </span>
      </div>
      <ul
        className={`bg-white absolute w-40 py-2 mt-[160px] rounded-lg shadow-xl ${
          openDropdown ? "block" : "hidden"
        }`}
      >
        <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
          Post a Job
        </li>
        <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
          All Job Posts
        </li>
        <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
          All Contracts
        </li>
      </ul>
    </div>
  );
};
export const TalentItem = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div
      onMouseLeave={() => setOpenDropdown(false)}
      // to={value.to}
      onMouseOver={() => setOpenDropdown(true)}
      // key={value.id}
      onClick={() => {}}
      className={
        "relative cursor-pointer flex flex-col gap-y-2 justify-center items-center p-2 hover:text-gray-800"
      }
    >
      <div className="z-99 flex gap-x-2 justify-center items-center">
        <a className={""}>Talent</a>
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
          Discover
        </li>

        <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
          Your Hires
        </li>
      </ul>
    </div>
  );
};
export const Workspace = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <Link
      to={"/client/workspace"}
      onMouseLeave={() => setOpenDropdown(false)}
      // to={value.to}
      onMouseOver={() => setOpenDropdown(true)}
      // key={value.id}
      onClick={() => {}}
      className={
        "relative cursor-pointer flex flex-col gap-y-2 justify-center items-center p-2 hover:text-gray-800"
      }
    >
      <div className="z-99 flex gap-x-2 justify-center items-center">
        <a className={""}>Workspace</a>
        <span>
          <BsChevronDown size={12} color="purple" />
        </span>
      </div>
      <ul
        className={`bg-white absolute w-40 py-2 mt-[160px] rounded-lg shadow-xl ${
          openDropdown ? "block" : "hidden"
        }`}
      >
        <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
          Dropdown List 1
        </li>
        <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
          Dropdown List 2
        </li>
        <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
          Dropdown List 3
        </li>
      </ul>
    </Link>
  );
};
export const MessageItem = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div
      onMouseLeave={() => setOpenDropdown(false)}
      // to={value.to}
      onMouseOver={() => setOpenDropdown(true)}
      // key={value.id}
      onClick={() => {}}
      className={
        "relative cursor-pointer flex flex-col gap-y-2 justify-center items-center p-2 hover:text-gray-800"
      }
    >
      <div className="z-99 flex gap-x-2 justify-center items-center">
        <a className={""}>Message</a>
      </div>
    </div>
  );
};
