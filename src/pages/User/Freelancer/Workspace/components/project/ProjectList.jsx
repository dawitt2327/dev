import React, { useState, useEffect } from "react";
import { MdEdit, MdPreview } from "react-icons/md";
import vscodeicon from "../../../../../../assets/images/vscodeicon.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { BaseURL } from "../../../../../../services/constants/Constants";
import moment from "moment";

const ProjectList = () => {
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

  const requestPayment = async (id) => {
    try {
      const res = await axios.put(
        BaseURL + `projects/request-payment/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        getProjects();
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
          <tr>
            <th scope="col" className="px-2 py-3">
              Project Name
            </th>
            <th scope="col" className="px-2 py-3">
              Started Date
            </th>
            <th scope="col" className="px-2 py-3">
              Project Budjet
            </th>
            <th scope="col" className="px-2 py-3">
              Project Status
            </th>

            <th scope="col" className="px-2 py-3">
              PAYMENT STATUS
            </th>
            <th scope="col" className="px-2 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, id) => {
            console.log(project.title)
            return (
            <tr
              key={id}
              className="border-b border-gray-200 dark:border-gray-700 py"
            >
              <td className="py-2 px-2">{project.title}</td>
              <td className="py-2 px-2">
                {moment(project?.createdAt).fromNow()}
              </td>
              <td className="py-2 px-2">{project?.self.earnings} ETB</td>
              <td className="py-2 px-2">{project.status}</td>
              <td className="py-2 px-2">
                <button
                  disabled={
                    project?.self?.isPaid || project?.self?.paymentRequested
                  }
                  onClick={() => {
                    requestPayment(project._id);
                  }}
                  className={`text-md text-white rounded-md w-40 px-2 py-1 ${
                    project?.self?.isPaid
                      ? "bg-green-500"
                      : project?.self?.paymentRequested
                      ? "bg-yellow-500"
                      : "bg-purple-500"
                  }`}
                >
                  {project?.self?.isPaid
                    ? "paid"
                    : project?.self?.paymentRequested
                    ? "Payment Requested"
                    : "Request Payment"}
                </button>
              </td>

              <td className="py-2 px-2">
                <Link
                  to={`/workspace/${project?._id}/${project?.title}`}
                  className="w-[40px] flex items-center rounded-md py-1 px-3 bg-purple-500  hover:bg-purple-600 text-white"
                >
                  <MdPreview size={20} color="white" />
                </Link>
              </td>
            </tr>
          )})};
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
