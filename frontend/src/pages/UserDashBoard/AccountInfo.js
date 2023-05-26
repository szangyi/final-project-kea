import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

// import Link from "@mui/material/Link";
import { Grid } from '@mui/material';
import MyCustomButton from "../../components/Button/Button"
import MyCustomTextField from "../../components/Form/TextField";

// VALIDATION
import { useFormik } from 'formik';
import { signupSchema } from '../../schemas';
import { Box, Typography } from '@mui/material';


const AccountInfo = (props) => {

    const userData = useOutletContext(); // data from UserDashBoard

    console.log(userData)

    const [userExists, setUserExists] = useState('');

    const { values, errors, touched, handleBlur, handleChange } = useFormik({
        initialValues: {
            firstName: userData.firstName,
            lastName: userData.lastName,
            username: userData.username,
        },

        validationSchema: signupSchema,
    });

    console.log(errors)

    const nav = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();
        const { username, firstName, lastName } = values; // Destructure values because of Formik

        try {
            const response = await axios.post('/api/user_update', { firstName, lastName, username });
            const message = response.data.message;

            if (message === "Userdata change succeeded") {
                nav('/');
            }
            else {
                console.log(message)
            }
            console.log(values)

        } catch (error) {
            if (error.response && error.response.status === 409) {
                setUserExists("User already exists maaaan");
            } else {
                console.error('Userdata change failed:', error);
            }
        }
    }

    return (
        <>
            <Box component="section" className="glassmorphism" sx={{ py: 5, px: 5, }}>

                <Typography variant="h4" >my account</Typography>
                <Typography variant="paragraph">Here you can edit public information about yourself.</Typography>

                <Box component="form" onSubmit={submitHandler} sx={{ mt: 1, width: '100%' }}>

                    <Grid container spacing={4} sx={{mt: 2}}>
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
                            {/* <Typography variant="subtitle1" sx={{color: 'customColors.salmon.dark'}}>profile photo</Typography> */}

                        </Grid>



                    </Grid>


                </Box>

            </Box>
        </>
    );

}

export default AccountInfo;