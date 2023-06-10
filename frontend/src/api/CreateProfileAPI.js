// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';




export default async function CreateProfileAPI(values, nav, setErrorMessage) {
    
    console.log(values)
    console.log('IMMMMMMAAAGGEEEE')
    console.log(values.image)
    
    try {

        const formData = new FormData();
        formData.append('username', values.username);
        formData.append('location', values.location);
        formData.append('bio', values.bio);
        // formData.append('image', values.image.image); 
        formData.append('image', values.image); 
        formData.append('category', values.category);
        formData.append('hashtag', values.hashtag);
        formData.append('website', values.website);
        formData.append('instagram', values.instagram);
        formData.append('youTube', values.youTube);

        console.log(formData)

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