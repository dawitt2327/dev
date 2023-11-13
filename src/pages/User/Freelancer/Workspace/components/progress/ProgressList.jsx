import { MdEdit, MdPreview } from "react-icons/md";

const ProgressList = () => {
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
              Project Budget
            </th>
            <th scope="col" className="px-2 py-3">
              Projects Status
            </th>
            <th scope="col" className="px-2 py-3">
              END DATE
            </th>
            <th scope="col" className="px-2 py-3">
              Progress
            </th>
          </tr>
        </thead>
        <tbody>
          {[1, 4, 5, 3, 4].map((user, id) => (
            <tr
              key={id}
              className="border-b border-gray-200 dark:border-gray-700 py"
            >
              <td className="py-2 px-2">COLABS</td>
              <td className="py-2 px-2">6 months</td>
              <td className="py-2 px-2">Getahun@gmail.com</td>
              <td className="py-2 px-2">12/11/89</td>
              <td className="py-2 px-2">22//11/99</td>

              <td className="py-2 px-2">
                <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">
                  45%
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-red-600 h-2.5 rounded-full dark:bg-red-500"
                    style={{ width: "45%" }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgressList;
