import * as Yup from 'yup';
import { LOCATION, CATEGORYOPTIONS } from '../util/Constants';

const regexURL = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;
const regexSoMeAccount = /^[a-zA-Z0-9_\.]+$/;
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


export const createProfileSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Min. 3 characters')
        .max(16, 'Max. 16 characters')
        .required('Required field'),
    bio: Yup.string()
        .min(10, 'Min. 10 characters')
        .max(200, 'Max. 200 characters')
        .required('Required field'),
    location: Yup.string()
        .required('Required field')
        .test('valid-location', 'Invalid location', (value) => {
            return LOCATION.some((option) => option.label === value);
        }),
    image: Yup.mixed()
        .required('Required field')
        .test('fileType', 'Only JPG, JPEG and PNG images are allowed', (value) => {
          if (value && value.name) {
            const extension = value.name.split('.').pop().toLowerCase();
            return ['jpg', 'jpeg', 'png'].includes(extension);
          }
          return true; // If no file is selected, consider it valid
        }),
    category: Yup.mixed()
        .required('Required field')
        .oneOf(
            CATEGORYOPTIONS.map((option) => option.category),
            'Invalid category'
        ),
    hashtag: Yup.mixed()
        .required('Required field'),
    website: Yup.string()
        .matches(regexURL, { message: "This website is a wrong format. Correct format: www.testsite.com" }),
    instagram: Yup.string()
        .min(3, 'Min. 3 characters')
        .max(16, 'Max. 16 characters')
        .matches(regexSoMeAccount, { message: "Your accountname is invalid. It cannot have any space and special characters, except '.' and '_'. " }),
    youTube: Yup.string()
        .min(3, 'Min. 3 characters')
        .max(16, 'Max. 16 characters')
        .matches(regexSoMeAccount, { message: "Your accountname is invalid. It cannot have any space and special characters, except '.' and '_'. " }),
    tikTok: Yup.string()
        .min(3, 'Min. 3 characters')
        .max(16, 'Max. 16 characters')
        .matches(regexSoMeAccount, { message: "Your accountname is invalid. It cannot have any space and special characters, except '.' and '_'. " })

})