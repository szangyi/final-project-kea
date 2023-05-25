import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from "@mui/material/Box";
import axios from 'axios';
import Cookies from 'js-cookie';
import ProfileLanding from '../components/Influencer/ProfileLanding'


const ProfileLandingPage = () => {
    const [profileData, setProfileData] = useState(null);
    const influencerID  = useParams();
    const token = Cookies.get('token');

    const getProfile = async() =>{
        try {
            const response = await axios.post('/api/get-profile', {influencerID}, {
                headers: {
                    Authorization: `${token}`,
                },
            });
            const profileData = response.data;
            setProfileData(profileData);
            

        } catch {
            console.log('getting profile failed');
        }
    }


    getProfile();

    if (profileData === null) {
        return <div>Loading your data...</div>;
      }


    return (
        <Box>
            <ProfileLanding profileData = {profileData} />
        </Box>
    );



}

export default ProfileLandingPage;


