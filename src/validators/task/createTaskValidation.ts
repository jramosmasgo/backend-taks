import * as yup from "yup";

const createTaskValidation = yup.object({
  title: yup.string().required("Title is required").max(20).min(3),
  body: yup.string(),
  deadline: yup.date(),
  url_iamge: yup.string().url(),
  user: yup.string().required("UserId is required"),
});

export default createTaskValidation;
