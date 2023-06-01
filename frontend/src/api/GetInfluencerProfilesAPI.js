
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function GetInfluencerProfilesAPI(token, setInfluencerData, setError) {
    const influencerDataError = "error";

    try {
        const response = await axios.get('/api/get-influencer-profiles', {
            headers: {
                Authorization: `${token}`,
            }
        });

        if (response.status === 200) {
            const influencerData = response.data;
            setInfluencerData(influencerData);
        } else {
            setInfluencerData(influencerDataError);
            const error = {
                message: response.body,
                statusCode: response.status,
            };
            setError(error);
        }
    } catch (error) {
        console.log('Create profile failed:', error);
        setInfluencerData(influencerDataError);
        setError(error);
    }
}