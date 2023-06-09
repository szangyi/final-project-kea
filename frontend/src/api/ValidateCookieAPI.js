
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function ValidateCookieAPI() {
    const errorMessage = "Invalid request"

    try {
        const response = await axios.get('/api/validate-cookie');

        if (response.status === 200) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log('Invalid request', error);
       
    }
}