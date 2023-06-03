
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function GetRandomProfilesAPI(token, setProfilesData, setError, numProfilesToShow) {
    const profileDataError = "error"
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
            setProfilesData(profileDataError);
            const error = {
                message: response.body,
                statusCode: response.status,
            };
            setError(error);
        }
    } catch (error) {
        console.log('Create profile failed:', error);
        setProfilesData(profileDataError);
        setError(error);
    }
}
