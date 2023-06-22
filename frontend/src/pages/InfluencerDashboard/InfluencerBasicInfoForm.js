// --------------------------
// REACT ---------------
// --------------------------
import React from 'react';


// --------------------------
// COMPONENTS ---------------
// --------------------------
import MyCustomTextField from "../../components/Form/TextField";
import ProfileImage from '../../components/Image/ProfileImage';
import Location from '../../components/Location/Location';


// --------------------------
// MATERIAL UI ---------------
// --------------------------
import { Typography, Box } from '@mui/material';



const InfluencerBasicInfoForm = ({ values, handleChange, touched, errors }) => {

    const handleLocationChange = (value) => {
        handleChange({ target: { name: 'location', value } });
    };

    const handleImageChange = (value) => {
        handleChange({ target: { name: 'image', value } });
    };

    return (
        <>

            <Typography variant="h6" sx={{ fontWeight: 600}}> Basic information </Typography>
            <Box sx={{mb: 3}}>
                <MyCustomTextField
                    size="normal"
                    margin="normal"
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    onChange={handleChange}
                    value={values.username}
                    error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                />

                <Location
                    onLocationChange={handleLocationChange}
                    error={touched.location && Boolean(errors.location)}
                    helperText={touched.location && errors.location}
                />

                <MyCustomTextField
                    margin="normal"
                    multiline
                    fullWidth
                    name="bio"
                    label="Write about yourself"
                    type="text"
                    id="bio"
                    autoComplete="bio"
                    onChange={handleChange}
                    value={values.bio}
                    error={touched.bio && Boolean(errors.bio)}
                    helperText={touched.bio && errors.bio}
                />

                <ProfileImage
                    onImageChange={handleImageChange}
                    onChange={handleChange}
                    value={values.image}
                    error={touched.image && Boolean(errors.image)}
                    helperText={touched.image && errors.image}

                />

            </Box>
        </>
    );
}

export default InfluencerBasicInfoForm;


