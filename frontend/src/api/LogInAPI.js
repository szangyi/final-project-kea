// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';
import Cookies from 'js-cookie';


export default async function LogInAPI(values, nav, setError, setFormError) {

    console.log(values)
    console.log('login apiiiiiii')

    try {
        const formData = {
            email: values.email,
            password: values.password,
        };

        const response = await axios.post('/api/login', formData)
        const token = response.data.jwt;
        const error = response.data.error

        if (response.status === 200) {
            Cookies.set('token', token);
            nav('/home');
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