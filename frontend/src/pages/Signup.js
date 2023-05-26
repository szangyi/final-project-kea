import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

// import Link from "@mui/material/Link";
import { Grid } from '@mui/material';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import MyCustomButton from "../components/Button/Button";
import MyCustomTextField from "../components/Form/TextField";
import MeshGradient from '../components/MeshGradient/MeshGradient';
import { Alert } from '@mui/material';

// VALIDATION
import { useFormik } from 'formik';
import { signupSchema } from '../schemas';

const Signup = () => {

    const [userExists, setUserExists] = useState('');

    const { values, errors, touched, handleBlur, handleChange } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
        },

        validationSchema: signupSchema,
    });

    console.log(errors)

    const nav = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();
        const { username, firstName, lastName, email, password } = values; // Destructure values because of Formik

        try {
            const response = await axios.post('/api/signup', { username, firstName, lastName, email, password });
            const message = response.data.message;

            if (message === "Signup succeeded") {
                nav('/login');
            }
            else {
                console.log(message)
            }
            console.log(values)

        } catch (error) {
            if (error.response && error.response.status === 409) {
                setUserExists("User already exists maaaan");
            } else {
                console.error('Signup failed:', error);
            }
        }
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

                    {userExists && (
                        <Alert severity="error">{userExists}</Alert>
                    )}

                    <Box component="form" onSubmit={submitHandler} sx={{ mt: 1, width: '100%' }}>

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

                        {/* <Link href="#" variant="body2" sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            {"I already have an account, I want to log in!"}
                        </Link> */}

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
};

export default Signup;