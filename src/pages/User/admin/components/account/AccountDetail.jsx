const AccountDetail = () => {
  return (
    <div className="w-full md:px-[20px] md:px-[80px] lg:px-[100px]">
      <form className="account-information mb-10">
        <div className="w-full my-2">
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            FIRST NAME
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="First Name"
            required
          />
        </div>
        <div className="w-full my-2">
          <label
            htmlFor="fist_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            LAST NAME
          </label>
          <input
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="w-full my-2">
          <label
            htmlFor="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            EMAIL ADDRESS
          </label>
          <input
            disabled
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="email@gmail.com"
          />
        </div>
        <div className="w-full my-2">
          <label
            htmlFor="fist_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            CURRENT PASSWORD
          </label>
          <input
            type="text"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="*********"
            required
          />
        </div>
        <div className="w-full my-2">
          <label
            htmlFor="fist_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            NEW PASSWORD
          </label>
          <input
            type="text"
            id="new_password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="*********"
            required
          />
        </div>

        <button className="mt-4 w-[150px] btn-link text-md md:text-md text-gray-100 font-medium flex justify-center items-center gap-x-3 hover:gap-x-5 transition-all py-3 rounded-md bg-purple-600  hover:bg-purple-600">
          Save Account
        </button>
      </form>
    </div>
  );
};

export default AccountDetail;
