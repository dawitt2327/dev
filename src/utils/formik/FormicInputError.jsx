import { ErrorMessage } from "formik";
import React from "react";

const FormicInputError = ({ name, component }) => {
  return (
    <ErrorMessage
      name={name}
      className="my-1 text-red-500 text-sm"
      component="div"
    />
  );
};

export default FormicInputError;
