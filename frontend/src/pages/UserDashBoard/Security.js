// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
// --------------------------
// MATERIAL UI ---------------
// --------------------------
import { Grid, Alert } from '@mui/material';
import MyCustomButton from "../../components/Button/Button"
import MyCustomTextField from "../../components/Form/TextField";
// --------------------------
// VALIDATION ---------------
// --------------------------
import { useFormik } from 'formik';
import { userSecuritySchema } from '../../schemas';
import { Box, Typography } from '@mui/material';
// --------------------------
// COMPONENTS ---------------
// --------------------------
import ErrorPage from '../ErrorPage';
import UpdateSecurityInfoAPI from '../../api/UpdateSecurityInfoAPI';

const Security = () => {


    const userData = useOutletContext();
    const [errorMessage, setErrorMessage] = useState(null)
    const [formError, setFormError] = useState('');


    const { values, errors, touched, handleBlur, handleChange, setTouched, validateForm } = useFormik({
        initialValues: {
            email: userData.email,
            password: userData.password,
        },
        

        validationSchema: userSecuritySchema,
    });

    const submitHandler = async(event) => {
        event.preventDefault();

        setTouched({
            email: true,
            password: true,
            passwordNew: true,
        });

        const updatedErrors = await validateForm();
        if ((Object.keys(updatedErrors).length === 0) && (Object.keys(errors).length === 0)) {
            setFormError("");
            UpdateSecurityInfoAPI(values, setErrorMessage);
        } else {
            setFormError('Please fill in all the required fields.');
        }
    }


    if (errorMessage) {
        return <ErrorPage error={errorMessage}/>
    }
    return (
        <>
            <Box component="section" className="glassmorphism" sx={{ py: 5, px: 5, }}>

                <Typography variant="h4" >security</Typography>
                <Typography variant="paragraph">Here you can change how you access your account.</Typography>


                {formError && (
                    <Alert sx={{ mt: 2, mb: -4 }} severity="error">{formError}</Alert>
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
                                    label="Email"
                                    name="email"
                                    type="text"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.email && Boolean(errors.email)}
                                    helperText={touched.email && errors.email}
                                />
                            <MyCustomTextField
                                size="normal"
                                margin="normal"
                                fullWidth
                                id="password"
                                label="Current password"
                                name="password"
                                type="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.password && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                            />

                            <MyCustomTextField
                                size="normal"
                                margin="normal"
                                fullWidth
                                id="passwordNew"
                                label="New password"
                                name="passwordNew"
                                type="password"
                                value={values.passwordNew}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.passwordNew && Boolean(errors.passwordNew)}
                                helperText={touched.passwordNew && errors.passwordNew}
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


