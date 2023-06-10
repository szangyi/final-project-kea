import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import MyCustomTextField from "../../components/Form/TextField";

import InstagramIcon from '@mui/icons-material/Instagram';
import LaptopIcon from '@mui/icons-material/Laptop';
import YouTubeIcon from '@mui/icons-material/YouTube';


const SocialAccountsForm = ({ onDataChange }) => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [socialAccountsData, setSocialAccountsData] = useState({
        website: '',
        instagram: '',
        youTube: '',
        tikTok: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSocialAccountsData((prevData) => ({ ...prevData, [name]: value }));
        onDataChange(socialAccountsData);
    }






    return (
        <>
            <MyCustomTextField
                size="normal"
                margin="normal"
                required
                fullWidth
                id="website"
                label="Website"
                name="website"
                autoComplete="website"
                value={socialAccountsData.website}
                onChange={handleChange}
            />

            <MyCustomTextField
                size="normal"
                margin="normal"
                required
                fullWidth
                id="instagram"
                label="Instagram"
                name="instagram"
                autoComplete="instagram"
                value={socialAccountsData.instagram}
                onChange={handleChange}
            />

            <MyCustomTextField
                size="normal"
                margin="normal"
                required
                fullWidth
                id="youTube"
                label="YouTube"
                name="youTube"
                autoComplete="youTube"
                value={socialAccountsData.youTube}
                onChange={handleChange}
            />

            <MyCustomTextField
                size="normal"
                margin="normal"
                required
                fullWidth
                id="tikTok"
                label="TikTok"
                name="tikTok"
                autoComplete="tikTok"
                value={socialAccountsData.tikTok}
                onChange={handleChange}
            />
        </>
    );



}

export default SocialAccountsForm;


