// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';
import Cookies from 'js-cookie';
import { setAuthToken, useAuth } from '../util/auth';



export default async function LogInAPI(values, nav, setError, setFormError) {

    try {
        const formData = {
            email: values.email,
            password: values.password,
        };

        const response = await axios.post('/api/login', formData)
        const token = response.data.jwt;
        const error = response.data.error

        if (response.status === 200) {
            setAuthToken(token);
        } else {
            const error = {
                message: response.data,
                statusCode: response.status,
            };
            setError(error);
        }
    } catch (error) {
        console.error('Login failed:', error);
        setFormError("Your e-mail or password is incorrect or this account doesn't exist "); // Set error message
    }


}