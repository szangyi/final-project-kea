
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function DeleteProfileAPI(token, influencerid, handleClose, setError) {

    try {
        const response = await axios.post('/api/delete-profile',  { influencerid }, {
            headers: {
                Authorization: `${token}`,
            }
        });

        if (response.status === 200) {
            handleClose()
        } else {
            const error = {
                message: response.body,
                statusCode: response.status,
            };
            setError(error);
        }
    } catch (error) {
        console.log('Create profile failed:', error);
        setError(error);
    }
}