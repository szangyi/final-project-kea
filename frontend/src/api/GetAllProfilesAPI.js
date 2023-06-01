
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function GetAllProfilesAPI(token, setProfilesData, setError) {
    const profileDataError = "error"
    try {
        const response = await axios.get('/api/profiles', {
            headers: {
                Authorization: `${token}`,
            }
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