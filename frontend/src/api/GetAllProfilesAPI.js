
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function GetAllProfilesAPI(setProfilesData, setErrorMessage) {
    try {
        const response = await axios.get('/api/profiles');

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
            setErrorMessage(errorMessage.message);
        } else {
            const errorMessage = { // General error message
                statusCode: error.response.status,
            };
            setErrorMessage(errorMessage);
        }
    }
}