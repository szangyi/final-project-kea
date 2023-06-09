
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function FavoritesGetAllAPI(setFavoritesData, setErrorMessage) {
    const errorMessage = "error"

    try {
        const response = await axios.get('/api/favorites-get-all');

        if (response.status === 200) {
            const favoritesData = response.data;
            setFavoritesData(favoritesData);
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