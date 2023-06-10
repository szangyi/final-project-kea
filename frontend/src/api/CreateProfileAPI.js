// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';




export default async function CreateProfileAPI(values, nav, setErrorMessage) {
    
    console.log(values)
    
    try {

        const formData = {
            username: values.username,
            bio: values.bio,
            location: values.location,
            website: values.website,
            instagram: values.instagram,
            youTube: values.youTube,
            hashtag: values.hashtag,
            category: values.category,
            image: values.image,

        };

        const response = await axios.post('/api/create-profile', formData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        });

        if (response.status === 200) {
            nav('/influencer-dashboard');
        } else {
            const error = {
            message: response.body,
            statusCode: response.status,
            };
            setErrorMessage(error);
        }
    
    } catch (error) {
        console.log('Create profile failed:', error);
        setErrorMessage(error);
 
 
    }
}

// export default async function CreateProfileAPI(formDataNew, nav, setError){

//     try {
//         const response = await axios.post('/api/create-profile', formDataNew, {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         });
  
//         if (response.status === 200) {
//           nav('/influencer-dashboard');
//         } else {
//           const error = {
//             message: response.body,
//             statusCode: response.status,
//           };
//           setError(error);
//         }
//       } catch (error) {
//         console.log('Create profile failed:', error);
//         setError(error);
//       }
// }