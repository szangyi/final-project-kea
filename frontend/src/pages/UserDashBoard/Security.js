import Cookies from 'js-cookie';
import React, { useState, useEffect, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

// import Link from "@mui/material/Link";
import { Grid, Alert, Snackbar } from '@mui/material';
import MyCustomButton from "../../components/Button/Button"
import MyCustomTextField from "../../components/Form/TextField";
import { SnackbarContext } from '../../components/SnackBar/SnackBarContext';

// VALIDATION
import { useFormik } from 'formik';
import { userSecuritySchema } from '../../schemas';
import { Box, Typography } from '@mui/material';

const Security = () => {


    const { showSnackbar } = useContext(SnackbarContext);
    const userData = useOutletContext(); // data from UserDashBoard
    const [userExists, setUserExists] = useState('');
    const [formError, setFormError] = useState('');
    // const [formSucess, setFormSuccess] = useState('');
    console.log(userData)

    const { values, errors, touched, handleBlur, handleChange, setTouched, validateForm } = useFormik({
        initialValues: {
            email: userData.email,
            password: userData.password,
        },

        validationSchema: userSecuritySchema,
    });

    console.log(errors)

    const nav = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();
        const { email, password } = values; // Destructure values because of Formik

        // Touch all the inputfields before submission
        setTouched({
            email: true,
            password: true
        });

        const updatedErrors = await validateForm();

        // If form is valid continue with submission
        if ((Object.keys(updatedErrors).length === 0) && (Object.keys(errors).length === 0)) {
            setFormError(""); // Clear form errors
            try {
                const response = await axios.post('/api/user_security_update', { email, password });
                const message = response.data.message;
                const token = response.data.jwt;
                const error = response.data.error;
                console.log({response})

                if (message === "Userdata change succeeded") {
                    // nav('/');
                    showSnackbar('Your information has been changed!');

                    if (token) {
                        Cookies.set('token', token);
                    }
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
        } else {
            // Form has errors, handle them
            setFormError('Please fill in all the required fields.');
        }

    }




    return (
        <>
            <Box component="section" className="glassmorphism" sx={{ py: 5, px: 5, }}>

                <Typography variant="h4" >security</Typography>
                <Typography variant="paragraph">Here you can change how you access your account.</Typography>


                {formError && (
                    <Alert sx={{ mt: 2, mb: -4 }} severity="error">{formError}</Alert>
                )}

                {userExists && (
                    <Alert sx={{ mt: 2, mb: -2 }} severity="error">{userExists}</Alert>
                )}


                <Box component="form" onSubmit={submitHandler} sx={{ mt: 1, width: '100%' }}>

                    <Grid container spacing={4} sx={{ mt: 2 }}>
                        <Grid container item xs={6}>

                            <Typography variant="h6">user information</Typography>
                            {/* <Typography variant="subtitle1" sx={{color: 'customColors.salmon.dark'}}>user information</Typography> */}

                            <MyCustomTextField
                                size="normal"
                                margin="normal"
                                fullWidth
                                id="email"
                                label="E-mail"
                                name="email"
                                type="text"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur} // validates the input when you unclick the input
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                            />
                            <MyCustomTextField
                                size="normal"
                                margin="normal"
                                fullWidth
                                id="password"
                                label="Password"
                                name="password"
                                // type="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.password && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                            />

                            <MyCustomButton
                                type="submit"
                                variant="contained"
                                sx={{ mt: 6, mb: 2, }}
                            >
                                Save changes
                            </MyCustomButton>

                        </Grid>

                        <Grid item xs={6}>
                        </Grid>

                    </Grid>


                </Box>
            </Box>
        </>
    );

}

export default Security;


