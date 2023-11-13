import { MdOutlineWorkHistory } from "react-icons/md";
import { RiDraftFill } from "react-icons/ri";
import { BsSignpost2Fill } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";

export const clientDashboardNav = [
  {
    id: 1,
    title: "Post Job",
    icon: <BsSignpost2Fill color="purple" size={25} />,
    to: "",
    titleClassName: "text-lg font-semibold leading-5 text-slate-800",
    containerClassName:
      "cursor-pointer flex items-center gap-x-3 px-6 py-2 rounded-3xl",
  },
  {
    id: 2,
    title: "Your Posting",
    icon: <MdOutlineWorkHistory color="purple" size={25} />,
    to: "",
    titleClassName: "text-lg font-semibold leading-5 text-slate-800",
    containerClassName:
      "cursor-pointer flex items-center gap-x-3 px-6 py-2 rounded-3xl",
  },
  {
    id: 3,
    title: "Project Catalog",
    icon: <AiOutlineProject color="purple" size={25} />,
    to: "",
    titleClassName: "text-lg font-semibold leading-5 text-slate-800",
    containerClassName:
      "cursor-pointer flex items-center gap-x-3 px-6 py-2 rounded-3xl",
  },
  {
    id: 4,
    title: "Draft",
    icon: <RiDraftFill color="purple" size={25} />,
    to: "",
    titleClassName: "text-lg font-semibold leading-5 text-slate-800",
    containerClassName:
      "cursor-pointer flex items-center gap-x-3 px-6 py-2 rounded-3xl",
  },
];

export const projectList = [
  {
    icon: "",
    title: "Colab Workspace",
    key: "COL",
    type: "Team-managed software",
    lead: "kebede demelash",
  },
  {
    icon: "",
    title: "COLABS Work",
    key: "BCUP",
    type: "Team-managed software",
    lead: "dawit demelash",
  },
  {
    icon: "",
    title: "Another Project",
    key: "BCBP",
    type: "Team-managed software",
    lead: "dagim demelash",
  },
  {
    icon: "",
    title: "Project 1",
    key: "BCBP",
    type: "Team-managed software",
    lead: "mekdes demelash",
  },
  {
    icon: "",
    title: "Project 2",
    key: "BCBP",
    type: "Team-managed software",
    lead: "dagim demelash",
  },
];
