import * as Yup from 'yup';

const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

// eslint-disable-next-line
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export const signupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Min. 2 characters')
        .max(20, 'Max. 20 characters')
        .required('Required field'),
    lastName: Yup.string()
        .min(2, 'Min. 2 characters')
        .max(20, 'Max. 20 characters')
        .required('Required field'),
    username: Yup.string()
        .min(3, 'Min. 3 characters')
        .max(16, 'Max. 16 characters')
        .required('Required field'),
    email: Yup.string()
        // .email('Invalid email address')
        .matches(regexEmail, { message: "Please enter a valid e-mail address. Correct format: test@email.com" })
        .required('Required field'),
    password: Yup.string()
        .min(6, 'Min. 6 characters')
        .max(100, 'Max. 100 characters')
        .matches(regexPassword, { message: "Your password must include at least 1 uppercase-, 1 lowercase letter, and 1 number" })
        .required('Required field'),
})


export const loginSchema = Yup.object().shape({
    email: Yup.string()
        .matches(regexEmail, { message: "Please enter a valid e-mail address. Correct format: test@email.com" })
        .required('Required field'),
    password: Yup.string()
        .min(6, 'Min. 6 characters')
        .max(100, 'Max. 100 characters')
        .matches(regexPassword, { message: "Your password must include at least 1 uppercase-, 1 lowercase letter, and 1 number" })
        .required('Required field'),
})

