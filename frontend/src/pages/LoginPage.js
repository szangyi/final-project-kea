
import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import MyCustomButton from "../components/Button/Button";
import MyCustomTextField from "../components/Form/TextField";
import MeshGradient from '../components/MeshGradient/MeshGradient';
import { Alert } from '@mui/material';
import LogInAPI from '../api/LogInAPI';

// VALIDATION
import { useFormik } from 'formik';
import { loginSchema } from '../schemas';

const LoginPage = () => {

    // VARIABLES ---------------
    const [formError, setFormError] = useState('');
    const [error, setError] = useState(null)
    const nav = useNavigate();
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000);

    const { values, errors, touched, handleBlur, handleChange, setTouched, validateForm } = useFormik({
        initialValues: {
            // email: '',
            // password: '',
            email: 'a@a.commm',
            password: 'FERImari24',
        },

        validationSchema: loginSchema,
    });


    // API CALLS ---------------
    const loginHandler = async (event) => {
        event.preventDefault();
        console.log(values)

        // Touch all the inputfields before submission
        setTouched({
            email: true,
            password: true,
        });

        const updatedErrors = await validateForm();

        if ((Object.keys(updatedErrors).length === 0) && (Object.keys(errors).length === 0)){
            setFormError("");
            LogInAPI(values, nav, setError, setFormError );
        } else {
            setFormError('Please fill in all the required fields.');
        }
    }


    return (
        <React.Fragment>
        <MeshGradient variant="full" ></MeshGradient>

        <Container component="main" maxWidth="sm">
            <Box className="glassmorphism"
                sx={{
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

                    <MyCustomButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, }}
                    >
                        Log me in
                    </MyCustomButton>

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
}

export default LoginPage;
