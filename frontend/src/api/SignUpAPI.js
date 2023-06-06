// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';


export default async function SignUpAPI(values, token, nav, setErrorMessage, setUserExists) {

    console.log(values)

    try {
        const formData = {
            firstName: values.firstName,
            lastName: values.lastName,
            username: values.username,
            email: values.email,
            password: values.password,
        };

        const response = await axios.post('/api/signup', formData, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${token}`,
            },
        });

        if (response.status === 200) {
            nav('/login');
        } 
    } catch (error) {
        if (error.response && error.response.status === 409) {
            const errorMessage = { // Page specific error message
                message: "User already exists with that username/ or email.",
                statusCode: error.response.status,
            };
            setUserExists(errorMessage.message);
        } else {
            const errorMessage = { // General error message
                statusCode: error.response.status,
            };
            setErrorMessage(errorMessage);
        }
    }


}