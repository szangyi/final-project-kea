// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';


// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';



// --------------------------
// COMPONENTS ---------------
// --------------------------
import MyCustomTextField from "../../components/Form/TextField";
import ProfileImage from '../../components/Image/ProfileImage';
import { LOCATION } from '../../util/Constants';
import Location from '../../components/Location/Location';
import { Typography } from '@mui/material';


const InfluencerBasicInfoForm = ({ values, handleChange, touched, errors }) => {

    const handleLocationChange = (value) => {
        handleChange({ target: { name: 'location', value } });
    };


    const handleImageChange = (value) => {
        handleChange({ target: { name: 'image', value } });
    };


    // VARIABLES ---------------
    const [locationData, setLocationData] = useState(null)

    // HANDLE CHANGE ---------------
    const handleLocationChangeLocal = (event, value) => {
        setLocationData(value);
        // onLocationChange(value && value.label ? value.label : '');
    }

    return (
        <>

        <Typography variant="h5"> Basic information </Typography>
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
                // onChange={handleChange}
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
        </>
    );
}

export default InfluencerBasicInfoForm;


