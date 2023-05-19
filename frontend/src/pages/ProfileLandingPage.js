import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from "@mui/material/Box";
import axios from 'axios';
import Cookies from 'js-cookie';


const ProfileLandingPage = () => {
    const influencerID  = useParams();
    const token = Cookies.get('token');

    const getProfile = async() =>{
        try {
            const response = await axios.post('/api/get-profile', {influencerID}, {
                headers: {
                    Authorization: `${token}`,
                },
            });

            console.log(response)
            

        } catch {
            console.log('getting profile failed');
        }
    }


    getProfile();


    return (
        <Box>
        Profile
        </Box>
    );



}

export default ProfileLandingPage;


