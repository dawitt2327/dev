import * as Yup from "yup";

const projectValidation = Yup.object().shape({
  title: Yup.string().required("Please enter project title"),
  members: Yup.array().required("Memebers are required"),
});

export default projectValidation;
