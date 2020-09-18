import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  loginEmail: yup.string().email().required('Email is required'),
  loginPassword: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must have at least 5 characters'),
});

export const registerSchema = yup.object().shape({
  registerEmail: yup.string().email().required('Email is required'),
  registerPassword: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must have at least 5 characters'),
  registerRepeatPassword: yup
    .string()
    .required('Password confiramtion is required')
    .min(5, 'Password must have at least 5 characters')
    .oneOf([yup.ref('registerPassword'), null], 'Passwords must match'),
});

export const schemaLoginValues = {
  loginEmail: '',
  loginPassword: '',
  loginSubmit: 'Login',
};
export const schemaRegisterValues = {
  registerEmail: '',
  registerPassword: '',
  registerRepeatPassword: '',
  registerSubmit: 'Register',
};
