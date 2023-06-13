
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate, Link, useRouteLoaderData } from "react-router-dom";

import { Grid } from '@mui/material';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import MyCustomButton from "../components/Button/Button";
import MyCustomTextField from "../components/Form/TextField";
import MeshGradient from '../components/MeshGradient/MeshGradient';
import { Alert } from '@mui/material';
import SignUpAPI from '../api/SignUpAPI';
import ErrorPage from './ErrorPage';

// VALIDATION
import { useFormik } from 'formik';
import { signupSchema } from '../schemas';

const SignupPage = () => {

    // VARIABLES ---------------
    const [formError, setFormError] = useState(null);
    const [userExists, setUserExists] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null)
    const token = useRouteLoaderData('root');
    const nav = useNavigate();
    const { values, errors, touched, handleBlur, handleChange, setTouched, validateForm } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
        },

        validationSchema: signupSchema,
    });

    // REDIRECT WHEN USER IS LOGGED IN ---------------
    useEffect(() => {
        if (token === true) {
            console.log('userloggedinman');
            nav('/');
        }
    }, [token]);


    // API CALLS ---------------
    const submitHandler = async (event) => {
        // const { username, firstName, lastName, email, password } = values; // Destructure values because of Formik
        event.preventDefault();

        // Touch all the inputfields before submission
        setTouched({
            firstName: true,
            lastName: true,
            username: true,
            email: true,
            password: true,
        });

        const updatedErrors = await validateForm();

        if ((Object.keys(updatedErrors).length === 0) && (Object.keys(errors).length === 0)) {
            setFormError(""); // Clear form errors
            SignUpAPI(values, nav, setErrorMessage, setUserExists);
        } else {
            setFormError('Please fill in all the required fields.');
        }
    }

    if (errorMessage) {
        return <ErrorPage error={errorMessage} />
    }

    return (
        <React.Fragment>
            <MeshGradient variant="full"></MeshGradient>

            <Container component="main" maxWidth="md">
                <Box className="glassmorphism"
                    sx={{
                        borderRadius: 1,
                        px: 4,
                        py: 6,
                        marginTop: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "#FFFF",
                        width: '100%',
                    }}
                >
                    <Typography component="h2" variant="h4" sx={{ mb: 2 }} >
                        sign up
                    </Typography>

                    {formError && (
                        <Alert severity="error">{formError}</Alert>
                    )}

                    {userExists && (
                        <Alert severity="error">{userExists}</Alert>
                    )}

                    <Box component="form" noValidate onSubmit={submitHandler} sx={{ mt: 1, width: '100%' }}>

                        <Grid container spacing={1}>
                            <Grid item xs={6} >
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

                        <Grid container spacing={1}>
                            <Grid item xs={6} >

                                <MyCustomTextField
                                    size="normal"
                                    margin="normal"
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    type="text"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.email && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}
                                />
                            </Grid>

                            <Grid item xs={6}>

                                <MyCustomTextField
                                    size="normal"
                                    margin="normal"
                                    fullWidth
                                    autoComplete="current-password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.password && Boolean(errors.password)}
                                    helperText={touched.password && errors.password}
                                />
                            </Grid>
                        </Grid>

                        <MyCustomButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, }}
                        >
                            Sign up
                        </MyCustomButton>


                        <Typography variant="body2" sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <Link to="/login">
                                I already have an account, I want to log in!
                            </Link>
                        </Typography>

                    </Box>
                </Box>
            </Container>

        </React.Fragment>

    );
}

export default SignupPage;
