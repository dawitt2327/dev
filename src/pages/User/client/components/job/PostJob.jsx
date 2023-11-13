import React from "react";
import ClientHeader from "../../header/ClientHeader";
import { Formik, Form, Field, ErrorMessage } from "formik";
import jobValidation from "./validation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { BaseURL } from "../../../../../services/constants/Constants";

const PostJob = () => {
  const navigateTo = useNavigate();
  const notify = (message, type) =>
    toast(message, {
      type,
    });
  const token = localStorage.getItem("token");
  const skills = ["React", "Node", "Express", "MongoDB", "Firebase", "AWS"];
  const handleSubmit = async (values) => {
    try {
      const resp = await axios.post(BaseURL + "jobs", values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (resp.status === 200) {
        notify("Job posted successfully", "success");
        setTimeout(() => {
          navigateTo("/client");
        }, 1500);
      }
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Server Error Please wait";
      notify(errorMessage, "error");
    }
  };
  return (
    <div>
      <div className="mt-[100px] md:px-[80px] px-[10px]">
        <ClientHeader selectedNav={2} />
        <div className="w-full lg:w-1/2  shadow-sm flex flex-col justify-center items-center gap-4 bg-white mb-10 p-4 mx-auto">
          <div className="mb-4 rounded-md text-2xl w-full bg-gray-200 p-4 text-center">
            Add Your Job Detail Here
          </div>
          <Formik
            className="space-y-4 md:space-y-6"
            initialValues={{
              title: "",
              description: "",
              earnings: "",
              requirements: [],
            }}
            onSubmit={(values, actions) => {
              handleSubmit(values);
            }}
            validationSchema={jobValidation}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              setFieldValue,
            }) => (
              <Form>
                <div className="flex flex-col gap-y-2">
                  <label
                    htmlFor="cover-lettter"
                    className="text-md text-slate-800"
                  >
                    Job Title
                  </label>
                  <Field
                    type="text"
                    placeholder="Enter job title here"
                    name="title"
                    className="px-4 py-2 rounded-md border-2 border-purple-600 focus:border-purple-600"
                  />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="flex flex-col gap-y-2 mt-3">
                  <label
                    htmlFor="cover-lettter"
                    className="text-md text-slate-800"
                  >
                    Job description
                  </label>
                  <textarea
                    name="description"
                    className="rounded-md border-2 border-purple-600 focus:border-purple-600"
                    rows="4"
                    cols="50"
                    placeholder="Write job description here"
                    onChange={(e) =>
                      setFieldValue("description", e.target.value)
                    }
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-y-2 mt-4">
                  <label
                    htmlFor="cover-lettter"
                    className="text-md text-slate-800"
                  >
                    Requirements
                  </label>
                  <div className="flex flex-wrap gap-2 h-40 max-h-40 overflow-auto border-[2px] py-3 px-2 rounded border-purple-600">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className={`h-[30px] cursor-pointer border-purple-600 border-2 text-sm text-black font-semibold  px-3 py-1 rounded-full focus:outline-none ${
                          values.requirements.includes(skill)
                            ? "bg-purple-600"
                            : ""
                        }`}
                        onClick={() =>
                          setFieldValue(
                            "requirements",
                            values.requirements.includes(skill)
                              ? values.requirements.filter((s) => s !== skill)
                              : [...values.requirements, skill]
                          )
                        }
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-y-2 mt-4">
                  <label
                    htmlFor="cover-lettter"
                    className="text-md text-slate-800"
                  >
                    Earning
                  </label>
                  <Field
                    type="text"
                    placeholder="Enter payment amount here"
                    name="earnings"
                    className="px-4 py-2 rounded-md border-2 border-purple-600 focus:border-purple-600"
                  />
                  <ErrorMessage
                    name="earnings"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="py-2 px-4 bg-purple-700 hover:bg-purple-600 text-white text-md mt-4 rounded-md"
                >
                  submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PostJob;
