import React, { useState } from 'react';
import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import MyCustomTextField from "../../Form/TextField.js";

import InstagramIcon from '@mui/icons-material/Instagram';
import LaptopIcon from '@mui/icons-material/Laptop';
import YouTubeIcon from '@mui/icons-material/YouTube';


const SocialAccounts = ({onDataChange}) => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [socialAccountsData, setSocialAccountsData] = useState({
        website:'',
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

        <Container>
            <Stack direction="row" spacing={2}>
                <Item><LaptopIcon /></Item>
                <MyCustomTextField
                    size="normal"
                    margin="normal"
                    required
                    fullWidth
                    id="website"
                    label="Website"
                    name="website"
                    autoComplete="website"
                    autoFocus
                    value = {socialAccountsData.website}
                    onChange={handleChange}
                />
            </Stack>

            <Stack direction="row" spacing={2}>
                <Item><InstagramIcon /></Item>
                <MyCustomTextField
                    size="normal"
                    margin="normal"
                    required
                    fullWidth
                    id="instagram"
                    label="Instagram"
                    name="instagram"
                    autoComplete="instagram"
                    autoFocus
                    value = {socialAccountsData.instagram}
                    onChange={handleChange}
                />
            </Stack>

            <Stack direction="row" spacing={2}>
                <Item><YouTubeIcon/></Item>
                <MyCustomTextField
                    size="normal"
                    margin="normal"
                    required
                    fullWidth
                    id="youTube"
                    label="YouTube"
                    name="youTube"
                    autoComplete="youTube"
                    autoFocus
                    value = {socialAccountsData.youTube}
                    onChange={handleChange}
                />
            </Stack>

            <Stack direction="row" spacing={2}>
                <Item><YouTubeIcon/></Item>
                <MyCustomTextField
                    size="normal"
                    margin="normal"
                    required
                    fullWidth
                    id="tikTok"
                    label="TikTok"
                    name="tikTok"
                    autoComplete="tikTok"
                    autoFocus
                    value = {socialAccountsData.tikTok}
                    onChange={handleChange}
                />
            </Stack>
        </Container>

    );



}

export default SocialAccounts;


