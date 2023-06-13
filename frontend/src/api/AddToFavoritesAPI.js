
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function AddToFavoritesAPI(influencerid, setError) {

    try {
        const response = await axios.post('/api/add-to-favorites', { influencerid });

        if (!response.status === 200) {
            const error = {
                message: response.body,
                statusCode: response.status,
            };
            setError(error);
        }
    } catch (error) {
        console.log('Add to favorirtes failed', error);
        setError(error);
    }
}

