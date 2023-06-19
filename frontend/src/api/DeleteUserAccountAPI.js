
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function DeleteProfileAPI(handleClose, setError, setDeleteError) {
    
    try {
        const response = await axios.post('/api/delete-user-account');
        console.log(response.status)
        if (response.status === 200) {
            handleClose()
            window.location.href = '/signup';
        } 
    } catch (error) {
        if (error.response.status === 400) {
            const errorMessage = {
                message: "Your account could not be deleted",
                statusCode: error.response.status,
            };
            handleClose()
            setDeleteError(errorMessage.message);
        } else {
            const errorMessage = { 
                statusCode: error.response.status,
            };
            setError(errorMessage);
        }
    }
}