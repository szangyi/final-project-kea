
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function GetProfileAPI(username,setProfileData, setOtherProfiles, setErrorMessage, setProfileExists) {
    const errorMessage = "error";

    try {
        const response = await axios.post('/api/get-profile', { username });

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
            setProfileExists(errorMessage.message);
        } else {
            const errorMessage = { // General error message
                statusCode: error.response.status,
            };
            setErrorMessage(errorMessage);
        }
    }
}