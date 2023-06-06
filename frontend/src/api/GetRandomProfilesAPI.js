
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function GetRandomProfilesAPI(token, setProfilesData, setErrorMessage, numProfilesToShow) {
    try {
        const response = await axios.get('/api/random-profiles', {
            headers: {
                Authorization: `${token}`,
            },
            params: {
                numProfiles: numProfilesToShow,
            },
        });

        if (response.status === 200) {
            const profileData = response.data;
            setProfilesData(profileData);
        } else {
            const errorMessage = { // General error error message
                statusCode: response.status,
            };
            setErrorMessage(errorMessage);
        }
    } catch (error) {
        const errorMessage = { // Page specific error message
            message: "Profiles could not be loaded. Try again!", 
            statusCode: error.response.status,
        };
        setErrorMessage(errorMessage);
    }
}
