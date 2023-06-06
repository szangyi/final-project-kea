
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function GetProfileAPI(token, username,setProfileData, setOtherProfiles, setErrorMessage) {
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