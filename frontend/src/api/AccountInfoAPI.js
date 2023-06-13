
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function AccountInfoAPI(setUserData, setError) {
    const errorMessage = "error"

    try {
        const response = await axios.get('/api/account-info');

        if (response.status === 200) {
            const userData = response.data;
            setUserData(userData);
        } 
    } catch (error) {
        if (error.response.status === 400) {
            const errorMessage = {
                message: "Your info could not be fetched",
                statusCode: error.response.status,
            };
            setError(errorMessage);
        } else {
            const errorMessage = { 
                statusCode: error.response.status,
            };
            setError(errorMessage);
        }
    }
}