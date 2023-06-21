// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function ValidateCookieAPI(value) {
    const errorMessage = "Invalid request"

    try {

        const response = await axios.get('/api/validate-cookie', { params: { value } });


        if (response.data.message == "page is public") {
            return false
        } else {
            return true
        }
    } catch (error) {
        console.log('Invalid request', error);

    }
}

