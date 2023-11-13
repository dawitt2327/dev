import * as Yup from "yup";

const profileValidator = Yup.object().shape({
  firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  email: Yup.string().email("Invalid email").required("Required"),

  password: Yup.string().min(6, "Too Short!"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  bio: Yup.string().min(2, "Too Short!"),
  occupation: Yup.string().min(2, "Too Short!"),
});

export default profileValidator;
