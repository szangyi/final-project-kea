
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function DeleteProfileAPI(influencerid, handleClose, setError, setDeleteError) {
    
    try {
        const response = await axios.post('/api/delete-profile',  { influencerid });
        if (response.status === 200) {
            handleClose()
        } 
    } catch (error) {
        if (error.response.status === 400) {
            const errorMessage = {
                message: "An influencer profile could not be deleted",
                statusCode: error.response.status,
            };
            setDeleteError(errorMessage.message);
        } else {
            const errorMessage = { 
                statusCode: error.response.status,
            };
            setError(errorMessage);
        }
    }
}