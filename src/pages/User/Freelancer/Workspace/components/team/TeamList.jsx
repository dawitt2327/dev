import { AiFillEdit } from "react-icons/ai";
import { MdEdit, MdPreview } from "react-icons/md";
import { useState, useEffect } from "react";
import TeamNameList from "./TeamNameList";
import axios from "axios";
import { BaseURL } from "../../../../../../services/constants/Constants";
import moment from "moment";

const TeamList = ({ project }) => {
  const [projects, setProjects] = useState([]);
  const token = localStorage.getItem("token");

  const getProjects = async () => {
    try {
      const res = await axios.get(BaseURL + "projects/freelancer", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        setProjects(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);
  return (
    <div className="md:relative overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase dark:text-gray-400 bg-purple-600">
          <tr className="">
            <th scope="col" className="px-2 py-3">
              Project Name
            </th>
            <th scope="col" className="px-2 py-3">
              Started Date
            </th>
            <th scope="col" className="px-2 py-3">
              Project Budget
            </th>

            <th scope="col" className="px-2 py-3">
              Project Status
            </th>
            <th scope="col" className="px-2 py-3">
              Project Teams
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, id) => (
            <tr
              key={id}
              className="border-b border-gray-200 dark:border-gray-700 py"
            >
              <td className="border border-gray-300 py-2 px-2">
                {project.title}
              </td>
              <td className="border border-gray-300 py-2 px-2">
                {moment(project.createdAt).fromNow()}
              </td>
              <td className="border border-gray-300 py-2 px-2">
                {project.self.earnings} ETB
              </td>
              <td className="border border-gray-300 py-2 px-2">
                {project.status}
              </td>

              <td className="border border-gray-300 py-2 px-2">
                <TeamNameList teams={project.teams} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamList;
