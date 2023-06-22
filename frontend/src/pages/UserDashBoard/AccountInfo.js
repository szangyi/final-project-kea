// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';


// --------------------------
// MATERIAL UI ---------------
// --------------------------

import { Box, Typography, Grid, Alert } from '@mui/material';


// --------------------------
// VALIDATION ---------------
// --------------------------
import { useFormik } from 'formik';
import { userBasicInfoSchema } from '../../schemas';


// --------------------------
// COMPONENTS ---------------
// --------------------------
import MyCustomButton from "../../components/Button/Button"
import MyCustomTextField from "../../components/Form/TextField";
import ErrorPage from '../ErrorPage';
import UpdateBasicInfoAPI from '../../api/UpdateBasicInfoAPI';
import ProfileImage from '../../components/Image/ProfileImage';


const AccountInfo = (props) => {

    // VARIABLES ---------------
    const userData = useOutletContext(); // data from UserDashBoard
    const [errorMessage, setErrorMessage] = useState(null)
    const [updateError, setUpdateError] = useState(null)
    const [formError, setFormError] = useState(null);

    const { values, errors, touched, handleBlur, handleChange, setTouched, validateForm } = useFormik({
        initialValues: {
            firstName: userData.firstName,
            lastName: userData.lastName,
            username: userData.username,
            profileImage: userData.userImage
        },

        validationSchema: userBasicInfoSchema,
    });


    // HANDLERS ---------------
    const handleImageChange = (value) => {
        handleChange({ target: { name: 'image', value } });
    };


    // API CALLS ---------------
    const submitHandler = async (event) => {
        event.preventDefault();

        setTouched({
            firstName: true,
            lastName: true,
            username: true,
            profileImage: true
        });


        const updatedErrors = await validateForm();
        if ((Object.keys(updatedErrors).length === 0) && (Object.keys(errors).length === 0)) {
            setFormError("");
            UpdateBasicInfoAPI(values, setErrorMessage, setUpdateError);
        } else {
            setFormError('Please fill in all the required fields.');
        }

    }


    // ERROR PAGE ---------------
    if (errorMessage) {
        return <ErrorPage error={errorMessage} />
    }


    return (
        <>

            <Box component="section"
                sx={{
                    borderLeft: { sm: '1px solid lightgrey' },
                    py: { xs: 2, sm: 5 }, px: { xs: 2, md: 5 },
                }}
            >

                <Typography variant="h4" >My account</Typography>
                <Typography variant="paragraph">Here you can edit public information about yourself.</Typography>

                <Box component="form" onSubmit={submitHandler} sx={{ mt: 1, width: '100%' }}>

                    <Grid container spacing={4} sx={{ mt: 2 }}>
                        <Grid container item xs={12} md={8}>

                            <Typography variant="h6">User information</Typography>


                            {formError && (
                                <Alert severity="error" sx={{ mb: 2, }}>{formError}</Alert>
                            )}

                            {updateError && (
                                <Alert severity="error">{updateError}</Alert>
                            )}


                            <Grid container item spacing={2}>
                                <Grid item xs={6}>
                                    <MyCustomTextField
                                        size="normal"
                                        margin="normal"
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        name="firstName"
                                        type="text"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur} // validates the input when you unclick the input
                                        error={touched.firstName && Boolean(errors.firstName)}
                                        helperText={touched.firstName && errors.firstName}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <MyCustomTextField
                                        size="normal"
                                        margin="normal"
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        type="text"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.lastName && Boolean(errors.lastName)}
                                        helperText={touched.lastName && errors.lastName}
                                    />
                                </Grid>
                            </Grid>

                            <MyCustomTextField
                                size="normal"
                                margin="normal"
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                type="text"
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.username && Boolean(errors.username)}
                                helperText={touched.username && errors.username}
                            />

                        </Grid>

                        <Grid item xs={12} md={4}>

                            <Typography variant="h6">Profile photo</Typography>

                            {values.profileImage ? (
                                <Box
                                    component="img"
                                    src={`https://influncr.pythonanywhere.com/images/profile_images/${values.profileImage}`}
                                    // src={`http://127.0.0.1:7878/profile_images/${values.profileImage}`}
                                    sx={{ height: 50, width: 50, objectFit: 'cover', borderRadius: '50%' }}
                                />
                            ) : (
                                <Typography variant="body2" color="customColors.grey.dark" >You do not have a profile image yet</Typography>

                            )}
                            <ProfileImage
                                onImageChange={handleImageChange}
                                onChange={handleChange}
                                value={values.image}
                                error={touched.image && Boolean(errors.image)}
                                helperText={touched.image && errors.image}
                            />

                        </Grid>

                        <MyCustomButton
                            type="submit"
                            variant="contained"
                            sx={{ mt: 6, mb: 2, ml: { xs: 4 } }}
                        >
                            Save changes
                        </MyCustomButton>

                    </Grid>


                </Box>

            </Box>
        </>
    );

}

export default AccountInfo;