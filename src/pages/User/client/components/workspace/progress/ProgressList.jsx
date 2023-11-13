import React from "react";
import moment from "moment";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { BaseURL } from "../../../../../../services/constants/Constants";

const ProgressList = ({ projects }) => {
  const token = localStorage.getItem("token");
  const [projectList, setProjects] = React.useState([...projects]);
  const notify = (message, type) =>
    toast(message, {
      type,
    });

  const getProjects = async () => {
    try {
      const resp = await axios.get(BaseURL + "projects", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (resp.status === 201) {
        setProjects(resp.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleComplete = async (projectId) => {
    try {
      const resp = await axios.put(
        BaseURL + "projects/" + projectId,
        { status: "COMPLETED" },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (resp.status === 200) {
        notify("Project completed successfully", "success"); // TODO : use modal to confirm
        getProjects();
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Server Error Please wait";
      notify(errorMessage, "error");
    }
  };

  return (
    <div className="md:relative overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase dark:text-gray-400 bg-purple-600">
          <tr>
            <th scope="col" className="px-2 py-3">
              Project Name
            </th>

            <th scope="col" className="px-2 py-3">
              Started Date
            </th>

            <th scope="col" className="px-2 py-3">
              Progress
            </th>
            <th scope="col" className="px-2 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {projectList.map((project, id) => (
            <tr
              key={id}
              className="border-b border-gray-200 dark:border-gray-700 py"
            >
              <td className="py-2 px-2">{project?.title}</td>
              <td className="py-2 px-2">
                {moment(new Date(project?.createdAt).toISOString()).fromNow()}
              </td>
              <td className="py-2 px-2">{project?.status}</td>

              <td className="py-2 px-2">
                <button
                  disabled={project?.status !== "ONGOING"}
                  onClick={(e) => {
                    e.preventDefault();
                    handleComplete(project?._id);
                  }}
                  className={` hover:bg-purple-700 px-2 py-1 rounded-md text-white ${
                    project.status === "COMPLETED"
                      ? "cursor-not-allowed bg-gray-500 hover:bg-gray-500"
                      : "bg-purple-500"
                  }`}
                >
                  {project.status === "COMPLETED"
                    ? "Project Completed"
                    : "Mark as completed"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default ProgressList;
