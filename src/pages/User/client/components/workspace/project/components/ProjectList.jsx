import { MdPreview } from "react-icons/md";
import { Link } from "react-router-dom";
import moment from "moment";

const ProjectList = ({ projects }) => {
  return (
    <div className="md:relative overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase dark:text-gray-400 bg-purple-600">
          <tr>
            <th scope="col" className="px-2 py-3">
              Project Name
            </th>
            <th scope="col" className="px-2 py-3">
              Project Memebers
            </th>
            <th scope="col" className="px-2 py-3">
              Started Date
            </th>
            <th scope="col" className="px-2 py-3">
              PROJECT STATUS
            </th>
            <th scope="col" className="px-2 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, id) => (
            <tr
              key={id}
              className="border-b border-gray-200 dark:border-gray-700 py"
            >
              <td className="py-2 px-2">{project.title}</td>
              <td className="py-2 px-2">{project.members.length}</td>
              <td className="py-2 px-2">
                {moment(new Date(project?.createdAt).toISOString()).fromNow()}
              </td>
              <td className="py-2 px-2">ongoing</td>

              <td className="py-2 px-2">
                <Link
                  to={`/client/workspace/projects/${project?._id}`}
                  className="flex justify-center items-center rounded-md py-1 px-3 bg-purple-500  hover:bg-purple-600 text-white"
                >
                  <MdPreview size={20} color="white" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
