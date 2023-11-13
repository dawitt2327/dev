import * as Yup from "yup";

const jobValidation = Yup.object().shape({
  title: Yup.string().required("Please enter job title"),
  description: Yup.string()
    .required()
    .min(8, "Description is too short - should be 16 chars minimum"),
  earnings: Yup.number().required("Please enter earnings"),
});

export default jobValidation;
