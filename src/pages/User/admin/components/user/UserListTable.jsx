import { MdEdit } from "react-icons/md";

const UserListTable = () => {
  return (
    <div className="md:relative overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase dark:text-gray-400 bg-purple-600">
          <tr>
            <th scope="col" className="px-2 py-3">
              First Name
            </th>
            <th scope="col" className="px-2 py-3">
              Last Name
            </th>
            <th scope="col" className="px-2 py-3">
              Email
            </th>
            <th scope="col" className="px-2 py-3">
              Gender
            </th>
            <th scope="col" className="px-2 py-3">
              Age
            </th>
            <th scope="col" className="px-2 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {[1, 4, 5, 3, 4].map((user, id) => (
            <tr
              key={id}
              className="border-b border-gray-200 dark:border-gray-700 py"
            >
              <td className="py-2 px-2">Kalkidan</td>
              <td className="py-2 px-2">Getahun</td>
              <td className="py-2 px-2">Getahun@gmail.com</td>
              <td className="py-2 px-2">Male</td>
              <td className="py-2 px-2">22</td>

              <td className="py-2 px-2">
                <button className="flex items-center rounded-md py-1 px-3 bg-red-500  hover:bg-red-600 text-white">
                  <span>Remove</span>
                  {/* <span className="ml-1">
									<MdEdit />
								</span> */}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserListTable;
