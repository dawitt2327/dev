import React, { useEffect } from "react";
import axios from "axios";
import { BaseURL } from "../../../../../services/constants/Constants";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";

const VerificationList = () => {
  const [requests, setRequests] = React.useState([]);
  const token = localStorage.getItem("token");
  const notify = (message, type) =>
    toast(message, {
      type,
    });

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BaseURL + "users/request", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        setRequests(res.data.requests);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAction = async (id, action) => {
    try {
      const res = await axios.put(
        BaseURL + "users/request/" + id + "?action=" + action,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        notify(res.data.message || "Request Sucess", "success");
        fetchRequests();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

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
              Role
            </th>
            <th scope="col" className="px-2 py-3">
              Request Time
            </th>
            <th scope="col" className="px-2 py-3">
              Id Document
            </th>
            <th scope="col" className="px-2 py-3">
              Bussiness License
            </th>
            <th scope="col" className="px-2 py-3">
              Approve
            </th>
            <th scope="col" className="px-2 py-3">
              Reject
            </th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, id) => (
            <tr
              key={id}
              className="border-b border-gray-200 dark:border-gray-700 py"
            >
              <td className="py-2 px-2">{request?.user?.firstName}</td>
              <td className="py-2 px-2">{request?.user?.lastName}</td>
              <td className="py-2 px-2">{request?.user?.email}</td>
              <td className="py-2 px-2">{request?.user?.type}</td>
              <td className="py-2 px-2">
                {moment(request?.user?.createdAt).fromNow()}
              </td>
              <td className="py-2 px-2">
                {request?.legalInfo?.legalDoc ? (
                  <a
                    href={request?.legalInfo?.legalDoc}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    View Document
                  </a>
                ) : (
                  "Not Uploaded"
                )}
              </td>
              <td className="py-2 px-2">
                {request?.legalInfo?.tradeLicense ? (
                  <a
                    href={request?.legalInfo?.tradeLicense}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:text-blue-600"
                  >
                    View Document
                  </a>
                ) : (
                  "Not Uploaded"
                )}
              </td>

              <td className="py-2 px-2">
                <button
                  onClick={() => {
                    handleAction(request?._id, "APPROVED");
                  }}
                  className="flex justify-center items-center rounded-md py-1 px-3 bg-purple-500  hover:bg-purple-600 text-white"
                >
                  <span>Approve</span>
                </button>
              </td>

              <td className="py-2 px-2">
                <button
                  onClick={() => {
                    handleAction(request?._id, "REJECTED");
                  }}
                  className="flex justify-center items-center rounded-md py-1 px-3 bg-red-500  hover:bg-purple-600 text-white"
                >
                  <span>Reject</span>
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

export default VerificationList;
