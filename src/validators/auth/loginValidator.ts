import * as yup from "yup";

const loginValidation = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default loginValidation;
