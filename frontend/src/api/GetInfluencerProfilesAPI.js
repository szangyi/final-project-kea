
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function GetInfluencerProfilesAPI(setInfluencerData, setErrorMessage) {

    try {
        const response = await axios.get('/api/get-influencer-profiles');

        if (response.status === 200) {
            const influencerData = response.data;
            setInfluencerData(influencerData);
        } 
    } catch (error) {
        if (error.response.status === 400) {
            const errorMessage = { // Page specific error message
                message: "We could not fetch your data. Try again!",
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