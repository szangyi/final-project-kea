// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';

export default async function CreateProfileAPI(values, nav, setErrorMessage, setProfileExists) {
    
    try {
        const formData = new FormData();
        formData.append('username', values.username);
        formData.append('location', values.location);
        formData.append('bio', values.bio);
        formData.append('image', values.image); 
        formData.append('category', values.category);
        formData.append('hashtag', values.hashtag);
        formData.append('website', values.website);
        formData.append('instagram', values.instagram);
        formData.append('youTube', values.youTube);
        formData.append('tikTok', values.tikTok);

        const response = await axios.post('/api/create-profile', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status === 200) {
            nav('/influencer-dashboard');
        } 
    
    } catch (error) {
        if (error.response && error.response.status === 409) {
            const errorMessage = { // Page specific error message
                message: "An influencer profile already exists with that username.",
                statusCode: error.response.status,
            };
            setProfileExists(errorMessage.message);
        } else {
            const errorMessage = { // General error message
                statusCode: error.response.status,
            };
            setErrorMessage(errorMessage);
        }
    }

}
