// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';


export default async function CreateProfileAPI(formDataNew, token, nav, setError){

    try {
        const response = await axios.post('/api/create-profile', formDataNew, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `${token}`,
          },
        });
  
        if (response.status === 200) {
          nav('/influencer-dashboard');
        } else {
          const error = {
            message: response.body,
            statusCode: response.status,
          };
          setError(error);
        }
      } catch (error) {
        console.log('Create profile failed:', error);
        setError(error);
      }
}