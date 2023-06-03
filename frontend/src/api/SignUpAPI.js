// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';


export default async function SignUpAPI(values, token, nav, setError, setUserExists) {

    console.log('APIIIIII')
    console.log(values)

    try {

        const formData = {
            firstName: values.firstName,
            lastName: values.lastName,
            username: values.username,
            email: values.email,
            password: values.password,
          };

        
        const response = await axios.post('/api/signup', formData, {
            headers: {
                // 'Content-Type': 'multipart/form-data',
                'Content-Type': 'application/json',
                Authorization: `${token}`,
            },
        });

        if (response.status === 200) {
            nav('/login');
        } else {
            const error = {
                message: response.body,
                statusCode: response.status,
            };
            setError(error);
        }
    } catch (error) {
        if (error.response && error.response.status === 409) {
            setUserExists("User already exists maaaan");
        } else {
            console.error('Signup failed:', error);
        }
    }


}