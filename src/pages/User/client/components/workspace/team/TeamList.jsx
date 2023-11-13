import { AiFillEdit } from "react-icons/ai";
import TeamNameList from "./TeamNameList";
import { Link } from "react-router-dom";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const TeamList = ({ projects }) => {
  const navigateTo = useNavigate();
  return (
    <div className="md:relative overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase dark:text-gray-400 bg-purple-600">
          <tr className="">
            <th scope="col" className="px-2 py-3">
              Project Name
            </th>
            <th scope="col" className="px-2 py-3">
              Start Date
            </th>
            <th scope="col" className="px-2 py-3">
              Project Members
            </th>

            <th scope="col" className="px-2 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {projects.length > 0 ? (
            projects.map((project, id) => (
              <tr
                key={id}
                className="border-b border-gray-200 dark:border-gray-700 py"
              >
                <td className="border border-gray-300 py-2 px-2">
                  {project.title}
                </td>
                <td className="border border-gray-300 py-2 px-2">
                  {moment(new Date(project?.createdAt).toISOString()).fromNow()}
                </td>

                <td className="border border-gray-300 py-2 px-2">
                  <TeamNameList members={project.members} />
                </td>

                <td className="border border-gray-300 py-2 px-2">
                  <div className="w-[50px] flex justify-center items-center rounded-md py-1 px-3 bg-purple-500  hover:bg-purple-600 text-white">
                    <AiFillEdit
                      size={20}
                      color="white"
                      onClick={() => {
                        navigateTo(
                          `/client/workspace/edit-project/${project?._id}`,
                          {
                            state: { project },
                          }
                        );
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr className="border-b border-gray-200 dark:border-gray-700 py">
              <td className="py-2 px-2">No projects yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TeamList;
