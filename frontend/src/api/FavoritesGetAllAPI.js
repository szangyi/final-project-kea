
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default async function FavoritesGetAllAPI(token, setFavoritesData, setError) {
    const nav = useNavigate();
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

            console.log(error.message)
            console.log(error.statusCode)
            setError(error);
            // nav('/error', { setError, state: { message: error.message, statusCode: error.statusCode } });
        }
    } catch (error) {
        console.log('Create profile failed:', error);
        setFavoritesData(errorMessage);
        setError(error);
    }
}