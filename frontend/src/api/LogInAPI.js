// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function LogInAPI(values, setFormError, setErrorMessage) {

    try {
        const formData = {
            email: values.email,
            password: values.password,
        };

        const response = await axios.post('/api/login', formData)

        if (response.status === 200) {
            window.location.href = '/home';
        }
    } catch (error) {
        if (error.response.status === 400) {
            const errorMessage = { // Page specific error message
                message: "Your e-mail or password is incorrect or this account doesn't exist.",
                statusCode: error.response.status,
            };
            setFormError(errorMessage.message);
        } else {
            const errorMessage = { // General error message
                statusCode: error.response.status,
            };
            setErrorMessage(errorMessage);
        }
    }


}