
// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';


export function LogOutAPIAction(){
    LogOutAPI();
}


async function LogOutAPI() {

    try {
        const response = await axios.get('/api/logout');

        if (response.status === 200) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log('Invalid request', error);
       
    }
}