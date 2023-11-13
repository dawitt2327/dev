import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { BaseURL } from "../../../../../../../services/constants/Constants";
import projectValidation from "../validation";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const notify = (message, type) =>
  toast(message, {
    type,
  });

const AddProjectForm = () => {
  const navigateTo = useNavigate();
  const token = localStorage.getItem("token");
  const [workers, setWorkers] = useState([{}]);
  const [selectMemberActive, setSelectMemberActive] = useState(false);

  const getWorkersFromAllJob = async () => {
    try {
      const resp = await axios.get(BaseURL + "users/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (resp.status === 200) {
        setWorkers(resp.data.hiredWorkers);
        //worker, earning
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWorkersFromAllJob();
  }, [selectMemberActive]);

  const createProjects = async (newProject) => {
    try {
      const resp = await axios.post(BaseURL + "projects", newProject, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (resp.status === 201) {
        notify("Project created successfully", "success");
        navigateTo("/client/workspace/projects");
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Server Error Please wait";
      notify(errorMessage, "error");
    }
  };
  return (
    <div className="w-2/4 mx-auto">
      <div className="mb-4 rounded-md text-2xl w-full bg-gray-200 p-4 text-center">
        Add Your Project Detail Here
      </div>
      <Formik
        className="space-y-4 md:space-y-6"
        initialValues={{
          title: "",
          members: [],
        }}
        onSubmit={(values, actions) => {
          values.members = values.members.map((data) => {
            return {
              workerId: data.worker._id,
              earnings: data.earnings,
            };
          });
          createProjects(values);
        }}
        validationSchema={projectValidation}
      >
        {({ values, touched, handleChange, handleBlur, setFieldValue }) => (
          <Form>
            <div className="my-2 flex flex-col gap-y-2">
              <label htmlFor="cover-lettter" className="text-md text-slate-800">
                Project Title
              </label>
              <Field
                type="text"
                placeholder="eg. Colaborative Workspace"
                name="title"
                className="px-4 py-2 rounded-md border-2 border-purple-600 focus:border-purple-600"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="my-2 flex flex-col gap-y-2">
              <label htmlFor="cover-lettter" className="text-md text-slate-800">
                Hired Freelancer:
              </label>
              {workers.length > 0 ? (
                <div className="flex flex-wrap gap-2 h-40 max-h-40 overflow-auto border-[2px] py-3 px-2 rounded border-purple-600">
                  {workers.map((data, index) => (
                    <span
                      key={index}
                      className={`h-[30px] cursor-pointer border-purple-600 border-2 text-sm text-black font-semibold  px-3 py-1 rounded-full focus:outline-none ${
                        values.members.includes(data)
                          ? "bg-purple-600 text-white"
                          : ""
                      }`}
                      onClick={() =>
                        setFieldValue(
                          "members",
                          values.members.includes(data)
                            ? values.members.filter(
                                (s) => s.worker?._id !== data?.worker?._id
                              )
                            : [...values.members, data]
                        )
                      }
                    >
                      {data?.worker?.email}
                    </span>
                  ))}
                </div>
              ) : (
                <ErrorMessage component="div">
                  {(msg) => (
                    <p className="text-red-500 text-sm">
                      {" "}
                      ** Hire freelancer through job post
                    </p>
                  )}
                </ErrorMessage>
              )}
            </div>

            <div className="my-2 flex flex-col gap-y-2">
              <label htmlFor="cover-lettter" className="text-md text-slate-800">
                Freelancer to added in this project:
              </label>
              {values.members.length > 0 &&
                values.members.map((data, index) => (
                  <span
                    className={`h-[30px] w-fit cursor-pointer border-purple-600 bg-purple-600 border-2 text-sm text-white font-semibold  px-3 py-1 rounded-full focus:outline-none`}
                    key={index}
                  >
                    {data?.worker?.email}
                  </span>
                ))}

              {values.members.length === 0 && (
                <ErrorMessage component="div">
                  {(msg) => (
                    <p className="text-red-500 text-sm">
                      {" "}
                      ** Add freelancer to this project
                    </p>
                  )}
                </ErrorMessage>
              )}
            </div>
            <button
              type="submit"
              className="py-2 px-4 bg-purple-700 hover:bg-purple-600 text-white text-md mt-4 rounded-md"
            >
              Create
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default AddProjectForm;
