
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function UpdateSecurityInfoAPI(values, setErrorMessage, setSecurityError) {

    try {

        const formData = {
            email: values.email,
            password: values.password,
            passwordNew: values.passwordNew,
        };



        const response = await axios.post('/api/update-security-info', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            console.log("user updated")
        }
    } catch (error) {
        console.log(error.response.status)
        if (error.response.status === 409) {
            const errorMessage = { // Page specific error message
                message: "User with the same email already exists",
                statusCode: error.response.status,
            };
            setSecurityError(errorMessage.message);
        } else if (error.response.status === 401) {
            const errorMessage = { // Page specific error message
                message: "Passwords do not match",
                statusCode: error.response.status,
            };
            setSecurityError(errorMessage.message);
        }else if (error.response.status === 400) {
                const errorMessage = { // Page specific error message
                    message: "User data could not be updated",
                    statusCode: error.response.status,
                };
                setSecurityError(errorMessage.message);
        } else {
            const errorMessage = { // General error message
                statusCode: error.response.status,
            };
            setErrorMessage(errorMessage);
        }
    }
}