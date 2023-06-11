// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
// --------------------------
// MATERIAL UI ---------------
// --------------------------
import MyCustomButton from "../../components/Button/Button"
import MyCustomTextField from "../../components/Form/TextField";
import { Box, Typography } from '@mui/material';
import { Grid } from '@mui/material';
// --------------------------
// VALIDATION ---------------
// --------------------------
import { useFormik } from 'formik';
import { userBasicInfoSchema } from '../../schemas';
// --------------------------
// COMPONENTS ---------------
// --------------------------
import ErrorPage from '../ErrorPage';
import UpdateBasicInfoAPI from '../../api/UpdateBasicInfoAPI';
import ProfileImage from '../../components/Image/ProfileImage';

const AccountInfo = (props) => {

    const userData = useOutletContext(); // data from UserDashBoard
    const [errorMessage, setErrorMessage] = useState(null)
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

    const handleImageChange = (value) => {
        handleChange({ target: { name: 'image', value } });
    };

    console.log(values)




    const submitHandler = async (event) => {
        event.preventDefault();

        setTouched({
            firstName: true,
            lastName: true,
            username: true,
        });


        const updatedErrors = await validateForm();
        if ((Object.keys(updatedErrors).length === 0) && (Object.keys(errors).length === 0)) {
            setFormError("");
            UpdateBasicInfoAPI(values, setErrorMessage);
        } else {
            setFormError('Please fill in all the required fields.');
        }

    }

    if (errorMessage) {
        return <ErrorPage error={errorMessage} />
    }
    return (
        <>
            <Box component="section" sx={{ py: 5, px: 5, }}>

                <Typography variant="h4" >my account</Typography>
                <Typography variant="paragraph">Here you can edit public information about yourself.</Typography>

                <Box component="form" onSubmit={submitHandler} sx={{ mt: 1, width: '100%' }}>

                    <Grid container spacing={4} sx={{ mt: 2 }}>
                        <Grid container item xs={8}>

                            <Typography variant="h6">user information</Typography>
                            {/* <Typography variant="subtitle1" sx={{color: 'customColors.salmon.dark'}}>user information</Typography> */}

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

                            <MyCustomButton
                                type="submit"
                                variant="contained"
                                sx={{ mt: 6, mb: 2, }}
                            >
                                Save changes
                            </MyCustomButton>

                        </Grid>

                        <Grid item xs={4}>

                            <Typography variant="h6">profile photo</Typography>

                            {values.profileImage ? (
                                <Box
                                    component="img"
                                    src={`http://127.0.0.1:7878/profile_images/${values.profileImage}`}
                                    sx={{ height: 50, width: 50, borderRadius: '50%' }}
                                />
                            ) : (
                                <Typography variant="p">You dont have a profile photo yet</Typography>

                            )}
                            <ProfileImage
                                onImageChange={handleImageChange}
                                onChange={handleChange}
                                value={values.image}
                                error={touched.image && Boolean(errors.image)}
                                helperText={touched.image && errors.image}
                            />

                        </Grid>



                    </Grid>


                </Box>

            </Box>
        </>
    );

}

export default AccountInfo;