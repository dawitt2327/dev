import { Field } from "formik";
const FormicInput = ({ type, name, placeholder, handleChange, as }) => {
  return (
    <Field
      as={as}
      type={type}
      name={name}
      placeholder={placeholder}
      // className={className}
      // onChange={handleChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  );
};

export default FormicInput;
