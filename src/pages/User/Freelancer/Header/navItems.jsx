import home from "../../../../assets/images/home.png";
import job from "../../../../assets/images/job.png";
import message from "../../../../assets/images/message.png";
import workspace from "../../../../assets/images/workspace.png";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    icon: home,
    to: "/feeds",
    className:
      "text-slate-700 hover:text-slate-900 px-3 rounded-md text-sm font-medium",
  },
  {
    id: 2,
    name: "Job",
    icon: job,
    to: "/jobs",
    className:
      "text-slate-700 hover:text-slate-900 px-3 rounded-md text-sm font-medium",
  },
  {
    id: 3,
    name: "Message",
    icon: message,
    to: "/messaging",
    className:
      "text-slate-700 hover:text-slate-900 px-3 rounded-md text-sm font-medium",
  },
  {
    id: 4,
    name: "Workspace",
    icon: workspace,
    to: "/workspace",
    className:
      "text-slate-700 hover:text-slate-900 px-3 rounded-md text-sm font-medium",
  },
];
