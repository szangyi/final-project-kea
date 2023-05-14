import React, { useState } from 'react';
import Container from "@mui/material/Container";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import MyCustomTextField from "../../Form/TextField.js";


const SocialAccounts = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [website, setWebsite] = useState('');
    const [instagram, setInstagram] = useState('');
    const [youTube, setYouTube] = useState('');
    const [tikTok, setTikTok] = useState('');





    return (

        <Container>
        <Stack direction="row" spacing={2}>
            <Item></Item>
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
                onChange={e => setWebsite(e.target.value)}
            />
        </Stack>

        <Stack direction="row" spacing={2}>
            <Item></Item>
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
                onChange={e => setInstagram(e.target.value)}
            />
        </Stack>

        <Stack direction="row" spacing={2}>
            <Item></Item>
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
                onChange={e => setYouTube(e.target.value)}
            />
        </Stack>

        <Stack direction="row" spacing={2}>
            <Item></Item>
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
                onChange={e => setTikTok(e.target.value)}
            />
        </Stack>
        </Container>
        
    );



}

export default SocialAccounts;


