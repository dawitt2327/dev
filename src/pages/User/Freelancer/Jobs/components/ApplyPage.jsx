import React, { useState, useEffect } from "react";
import FreelancerHeader from "../../Header/Header";
import { useParams } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import { coverLtterSchema } from "./validator";
import axios from "axios";
import { BaseURL } from "../../../../../services/constants/Constants";
import { ToastContainer, toast } from "react-toastify";
import AppliedSuccessfully from "./AppliedSuccessfully";

const ApplyPage = () => {
  const { jobId } = useParams();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const notify = (message, type) =>
    toast(message, {
      type,
    });

  const [job, setJob] = useState({});
  const url = "jobs/detail/" + jobId;

  const getJobDetail = async () => {
    try {
      const resp = await axios.get(BaseURL + url);
      if (resp.status === 200) {
        setJob(resp.data.job);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJobDetail();
  }, []);

  const handleApply = async (coverLetter) => {
    try {
      const resp = await axios.post(
        BaseURL + "jobs/apply/" + jobId,
        {
          coverLetter,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (resp.status === 200) {
        notify("Job applied successfully", "success");
        getJobDetail();
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
        <FreelancerHeader selectedNav={2} />
        <div className="lg:w-2/4  shadow-md flex justify-center items-center gap-4 p-4 mx-auto">
          {job?.pendingworkers?.some((userId) => userId === user?._id) ? (
            <AppliedSuccessfully />
          ) : (
            <Formik
              className="space-y-4 md:space-y-6"
              initialValues={{
                coverLetter: "",
              }}
              validationSchema={coverLtterSchema}
              onSubmit={(values, actions) => {
                handleApply(values.coverLetter);
              }}
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
                      Cover Letter
                    </label>
                    <textarea
                      className="rounded-md border-2 border-purple-600 focus:border-purple-600"
                      rows="4"
                      cols="50"
                      name="cover-letter"
                      onChange={(e) =>
                        setFieldValue("coverLetter", e.target.value)
                      }
                      placeholder="Write cover letter here"
                    />
                    <ErrorMessage
                      component="div"
                      className="text-red-500 text-sm"
                      name="coverLetter"
                    />
                  </div>

                  <button
                    type="submit"
                    className="py-2 px-4 bg-purple-700 hover:bg-purple-600 text-white text-md mt-4 rounded-md"
                  >
                    submit peoposal
                  </button>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ApplyPage;
