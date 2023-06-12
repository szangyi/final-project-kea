
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function ValidateCookieAPI(value) {
    const errorMessage = "Invalid request"

    try {

        // const response = await axios.get('/api/validate-cookie', { onlyCheck });
        const response = await axios.get('/api/validate-cookie', { params: { value } });
        console.log(response.data.message)


        if (response.data.message == "page is public") {
            console.log(response.data.message)
            console.log("I am here")
            return false
        } else {
            console.log(response.data.message)
            return true
        }
    } catch (error) {
        console.log('Invalid request', error);

    }
}