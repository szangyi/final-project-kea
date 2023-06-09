
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function DeleteProfileAPI(influencerid, handleClose, setError) {

    try {
        const response = await axios.post('/api/delete-profile',  { influencerid });

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