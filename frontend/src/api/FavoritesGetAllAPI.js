
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function FavoritesGetAllAPI(token, setFavoritesData, setError) {
    const errorMessage = "error"

    try {
        const response = await axios.get('/api/favorites-get-all', {
            headers: {
                Authorization: `${token}`,
            }
        });

        if (response.status === 200) {
            const favoritesData = response.data;
            setFavoritesData(favoritesData);
        } else {
            setFavoritesData(errorMessage);
            const error = {
                message: response.body,
                statusCode: response.status,
            };
            setError(error);
        }
    } catch (error) {
        console.log('Create profile failed:', error);
        setFavoritesData(errorMessage);
        setError(error);
    }
}