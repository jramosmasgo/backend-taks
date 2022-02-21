import * as yup from 'yup';

const registerValidation = yup.object({
    name: yup.string().min(2, '').max(20).required(),
    email: yup.string().email().required(),
    profile_image: yup.string().url(),
    password: yup.string().required()
});

export default registerValidation;