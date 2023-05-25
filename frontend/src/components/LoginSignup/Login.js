import '../../style/style.css'

import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate, useRouteLoaderData, Link } from "react-router-dom";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Alert } from '@mui/material';
// import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import MyCustomButton from "../Button/Button";
import MyCustomTextField from "../Form/TextField";
import MeshGradient from '../MeshGradient/MeshGradient';

// VALIDATION
import { useFormik } from 'formik';
import { loginSchema } from '../../schemas';

const Login = () => {

    const [formError, setFormError] = useState('');

    const { values, errors, touched, handleBlur, handleChange } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        validationSchema: loginSchema,
    });

    const nav = useNavigate();
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000);

    const loginHandler = async (event) => {
        event.preventDefault();
        const { email, password } = values; // Destructure values because of Formik

        if (errors.email || errors.password) {
            console.log(errors)
            console.log('there is form error so you cannot send it')
        } else {
            try {
                console.log('at least try')
                const response = await axios.post('/api/login', { email, password });
                console.log({ response })
                const token = response.data.jwt;
                const error = response.data.error;


                if (token) {
                    Cookies.set('token', token);
                    // Cookies.set('token', token, { expires: expirationDate });

                    nav('/home');
                }
                // what is this?
                else {
                    console.log(error);
                }

                // NO matches in the database
            } catch (error) {
                console.error('Login failed:', error.response.error);
                setFormError("Your e-mail or password is incorrect or this account doesn't exist "); // Set error message
            }
        }
    }


    return (
        <React.Fragment>
            <MeshGradient variant="full" ></MeshGradient>

            <Container component="main" maxWidth="sm">
                <Box className="glassmorphism"
                    sx={{
                        // boxShadow: 3,
                        borderRadius: 1,
                        px: 4,
                        py: 6,
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        backgroundColor: "#FFFF"
                    }}
                >
                    <Typography component="h2" variant="h4" sx={{ mb: 2 }} >
                        log in
                    </Typography>

                    {formError && (
                        <Alert severity="error">{formError}</Alert>
                    )}

                    <Box component="form" onSubmit={loginHandler} noValidate sx={{ mt: 1 }}>
                        <MyCustomTextField
                            // component="input"
                            size="normal"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                        />
                        <MyCustomTextField
                            // component="input"
                            size="normal"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                        />
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                        <MyCustomButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, }}
                        >
                            Log me in
                        </MyCustomButton>

                        {/* <Link href="#" variant="body2" sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            {"Don't have an account? Sign Up"}
                        </Link> */}

                        <Typography variant="body2" sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <Link to="/signup">
                                Don't have an account? Sign Up.
                            </Link>
                        </Typography>


                    </Box>
                </Box>
            </Container>

        </React.Fragment>
    );
};


export default Login;