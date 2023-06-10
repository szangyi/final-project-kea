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

const InfluencerBasicInfoForm = ({ values, handleChange, touched, errors }) => {

    // VARIABLES ---------------
    // const [basicData, setBasicData] = useState({
    //     username: '',
    //     bio: ''
    // });

    // // HANDLE CHANGE ---------------
    // const handleChange = (event) => {
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

    const handleLocationChange = (value) => {
        handleChange({ target: { name: 'location', value } });
    };



    return (
        <>
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
                // onChange={handleChange}
                value={values.location}
                className={'muchahhooo'}

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
                // onImageChange={handleImageChange}
                onChange={handleChange}
                value={values.image}

            />
        </>
    );
}

export default InfluencerBasicInfoForm;


