
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function ValidateCookieAPI(onlyCheck) {
    const errorMessage = "Invalid request"
    console.log('im in the apiiii')
    console.log(onlyCheck)

    try {

        // const response = await axios.get('/api/validate-cookie', { onlyCheck });
        const response = await axios.get('/api/validate-cookie', { params: { onlyCheck } });


        if (response.status === 200) {
            console.log(response)
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log('Invalid request', error);

    }
}