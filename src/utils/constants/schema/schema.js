import * as Yup from "yup";

export const signinSchema = Yup.object().shape({
  email: Yup.string("Email must be string!")
    .email("Invalid email")
    .required("Email address required!"),
  password: Yup.string("Password must be string!")
    .min(6, "password should be atleast 6 characters!")
    .max(50, "password too Long!")
    .required("Password is required!"),
});
export const signupSchema = Yup.object().shape({
  firstName: Yup.string().required("Firstname required!"),
  lastName: Yup.string().required("Lastname required!"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email address required!"),
  password: Yup.string()
    .min(6, "password should be atleast 6 characters!")
    .max(50, "password too Long!")
    .required("Password required!"),
});
export const jobSchema = Yup.object().shape({
  title: Yup.string().min(5, "Title is too short!").required("Required"),
  description: Yup.string()
    .min(50, "Title is too short! showuld be morethan 50 characters")
    .required("Required"),
});
