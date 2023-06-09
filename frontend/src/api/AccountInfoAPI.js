
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
        } else {
            setUserData(errorMessage);
            const error = {
                message: response.body,
                statusCode: response.status,
            };
            setError(error);
        }
    } catch (error) {
        console.log('Create profile failed:', error);
        setUserData(errorMessage);
        setError(error);
    }
}