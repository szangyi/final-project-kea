
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function GetAllProfilesAPI(token, setProfilesData, setErrorMessage) {
    try {
        const response = await axios.get('/api/profiles', {
            headers: {
                Authorization: `${token}`,
            }
        });

        if (response.status === 200) {
            const profileData = response.data;
            setProfilesData(profileData);
        }

    } catch (error) {
        if (error.response.status === 400) {
            const errorMessage = { // Page specific error message
                message: "We could not fetch the data. Try again!",
                statusCode: error.response.status,
            };
            setErrorMessage(errorMessage);
        } else {
            const errorMessage = { // General error message
                statusCode: error.response.status,
            };
            setErrorMessage(errorMessage);
        }
    }
}