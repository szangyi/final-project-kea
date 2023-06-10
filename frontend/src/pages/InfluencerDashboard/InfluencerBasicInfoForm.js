// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';

// --------------------------
// COMPONENTS ---------------
// --------------------------
import MyCustomTextField from "../../components/Form/TextField";
import ProfileImage from '../../components/Image/ProfileImage';
import Location from '../../components/Location/Location';

const InfluencerBasicInfoForm = ({ values, errors, handleChange, handleImageChange, handleLocationChange }) => {

    // VARIABLES ---------------
    // const [basicData, setBasicData] = useState({
    //     username: '',
    //     bio: ''
    // });

    // // HANDLE CHANGE ---------------
    // const handleChange = (event) => {
    //     console.log('handlechange')
    //     const { name, value } = event.target;
    //     setBasicData((prevData) => ({ ...prevData, [name]: value }))
    //     onDataChange(basicData);
    // }

    // const handleLocationChange = (data) => {
    //     onDataChange({ location: data });
    // }

    // const handleImageChange = (data) => {
    //     onDataChange(data)
    // }


    return (
        <>
            <MyCustomTextField
                size="normal"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={values.username}
                onChange={handleChange}
                // error={touched.username && Boolean(errors.username)}
                // helperText={touched.username && errors.username}
            />

            <Location onLocationChange={handleLocationChange} />

            <MyCustomTextField
                margin="normal"
                multiline
                required
                fullWidth
                name="bio"
                label="Write about yourself"
                type="text"
                id="bio"
                autoComplete="bio"
                value={values.bio}
                onChange={handleChange}
            />

            <ProfileImage onImageChange={handleImageChange} />
        </>
    );
}

export default InfluencerBasicInfoForm;


