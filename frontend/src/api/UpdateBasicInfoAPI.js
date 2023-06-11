
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function UpdateBasicInfoAPI(values, setErrorMessage) {

    try {

        const formData = new FormData();
        formData.append('username', values.username);
        formData.append('firstName', values.firstName);
        formData.append('lastName', values.lastName);
        formData.append('image', values.image);



        const response = await axios.post('/api/update-basic-info', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
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