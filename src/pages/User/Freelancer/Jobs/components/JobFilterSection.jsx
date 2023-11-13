import React from "react";

const JobFilterSection = ({ setFilters, filters }) => {
  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className="bg-gray-200 text-center py-2 text-xl font-medium">
        Filter Here
      </div>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center">
          <input
            id="checked-checkbox"
            type="checkbox"
            onChange={(e) =>
              setFilters({
                ...filters,
                order: e.target.checked ? "desc" : "asc",
              })
            }
            className="w-4 h-4 text-purple-600 bg-gray-100 border-purple-300 rounded"
          />
          <label
            htmlFor="checked-checkbox"
            className="ml-2 text-lg text-gray-900 dark:text-gray-300"
          >
            Most recent
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="checked-checkbox"
            type="checkbox"
            onChange={(e) =>
              setFilters({
                ...filters,
                paymentVerified: e.target.checked ? true : "",
              })
            }
            className="w-4 h-4 text-purple-600 bg-gray-100 border-purple-300 rounded"
          />
          <label
            htmlFor="checked-checkbox"
            className="ml-2 text-lg text-gray-900 dark:text-gray-300"
          >
            Payment Verified
          </label>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <label
            for="large-range"
            className="ml-2 text-lg text-gray-900 dark:text-gray-300"
          >
            Earnings
          </label>
          <input
            id="large-range"
            type="range"
            value={filters.earnings}
            min="0"
            max="5000"
            onChange={(e) =>
              setFilters({
                ...filters,
                earnings: e.target.value,
              })
            }
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700"
          />{" "}
          <div className="flex justify-between">
            <span className="text-gray-900 dark:text-gray-300 font-medium text-sm mt-1">
              {"Higher than " + filters.earnings + " Birr"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFilterSection;
