import * as Yup from "yup";

const loginValidation = Yup.object().shape({
  email: Yup.string().email().required("Please enter your email address"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

export default loginValidation;
