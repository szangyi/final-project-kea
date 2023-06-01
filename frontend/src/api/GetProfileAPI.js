
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function GetProfileAPI(token, username,setProfileData, setOtherProfiles, setError) {
    const errorMessage = "error";

    try {
        const response = await axios.post('/api/get-profile', { username }, {
            headers: {
                Authorization: `${token}`,
            }
        });

        if (response.status === 200) {
            const profileDataResponse = response.data.profileData;
            const profileData = Object.values(profileDataResponse)
            const otherProfiles = response.data.otherProfiles;
            setOtherProfiles(otherProfiles);
            setProfileData(profileData);
        } else {
            setOtherProfiles(errorMessage);
            setProfileData(errorMessage);
            const error = {
                message: response.body,
                statusCode: response.status,
            };
            setError(error);
        }
    } catch (error) {
        console.log('Create profile failed:', error);
        setOtherProfiles(errorMessage);
        setProfileData(errorMessage);
        setError(error);
    }
}