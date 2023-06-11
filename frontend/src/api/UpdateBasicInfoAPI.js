
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function UpdateBasicInfoAPI(values, setErrorMessage) {

    try {

        const formData = {
            firstName: values.firstName,
            lastName: values.lastName,
            username: values.username,
        };


        const response = await axios.post('/api/update-basic-info', formData, {
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
                message: "User with the same username already exists",
                statusCode: error.response.status,
            };
            setErrorMessage(errorMessage.message);
        } else {
            const errorMessage = { // General error message
                statusCode: error.response.status,
            };
            setErrorMessage(errorMessage);
        }
    }
}