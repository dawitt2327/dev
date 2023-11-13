import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const EditTeamForm = () => {
  useEffect(() => {
    document.getElementById("member").focus();
  }, []);
  return (
    <div className="w-2/4 mx-auto">
      <div className="mb-4 rounded-md text-2xl w-full bg-gray-200 p-4 text-center">
        Add Your Project Teams Memeber
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
        // validationSchema={jobValidation}
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
            <div className="my-2 flex flex-col gap-y-2">
              <label htmlFor="cover-lettter" className="text-md text-slate-800">
                Project Title
              </label>
              <Field
                disabled
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
                Project Member
              </label>
              <Field
                id={"member"}
                as="textarea"
                type="text"
                placeholder="eg. kal@gmail.com, dan@gmail.com"
                name="member"
                className="px-4 py-2 rounded-md border-2 border-purple-600 focus:border-purple-600"
              />
              <ErrorMessage
                name="member"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <button
              type="submit"
              className="py-2 px-4 bg-purple-700 hover:bg-purple-600 text-white text-md mt-4 rounded-md"
            >
              Update
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditTeamForm;
