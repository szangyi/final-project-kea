import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import MyCustomTextField from "../../components/Form/TextField";
import { Typography, Box } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import LaptopIcon from '@mui/icons-material/Laptop';
import YouTubeIcon from '@mui/icons-material/YouTube';


const SocialAccountsForm = ({ values, handleChange, touched, errors }) => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    // const [socialAccountsData, setSocialAccountsData] = useState({
    //     website: '',
    //     instagram: '',
    //     youTube: '',
    //     tikTok: ''
    // });

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setSocialAccountsData((prevData) => ({ ...prevData, [name]: value }));
    //     onDataChange(socialAccountsData);
    // }


    return (
        <>
                    <Typography variant="h6" sx={{ fontWeight: 600}}> Social accounts </Typography>
            <Box>
                <MyCustomTextField
                    size="normal"
                    margin="normal"
                    fullWidth
                    id="website"
                    label="Website"
                    name="website"
                    autoComplete="website"
                    value={values.website}
                    onChange={handleChange}
                    error={touched.website && Boolean(errors.website)}
                    helperText={touched.website && errors.website}
                />

                <MyCustomTextField
                    size="normal"
                    margin="normal"
                    fullWidth
                    id="instagram"
                    label="Instagram"
                    name="instagram"
                    autoComplete="instagram"
                    value={values.instagram}
                    onChange={handleChange}
                    error={touched.instagram && Boolean(errors.instagram)}
                    helperText={touched.instagram && errors.instagram}
                />

                <MyCustomTextField
                    size="normal"
                    margin="normal"
                    fullWidth
                    id="youTube"
                    label="YouTube"
                    name="youTube"
                    autoComplete="youTube"
                    value={values.youTube}
                    onChange={handleChange}
                    error={touched.youTube && Boolean(errors.youTube)}
                    helperText={touched.youTube && errors.youTube}
                />

                <MyCustomTextField
                    size="normal"
                    margin="normal"
                    fullWidth
                    id="tikTok"
                    label="TikTok"
                    name="tikTok"
                    autoComplete="tikTok"
                    value={values.tikTok}
                    onChange={handleChange}
                    error={touched.tikTok && Boolean(errors.tikTok)}
                    helperText={touched.tikTok && errors.tikTok}
                />
            </Box>
        </>
    );



}

export default SocialAccountsForm;


