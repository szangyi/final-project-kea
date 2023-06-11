
// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Alert } from '@mui/material';
import ErrorPage from '../ErrorPage'



// --------------------------
// COMPONENTS ---------------
// --------------------------
import CreateProfileAPI from '../../api/CreateProfileAPI'
import MyCustomButton from '../../components/Button/Button';

import InfluencerBasicInfoForm from './InfluencerBasicInfoForm';
import InfluencerSelectForm from './InfluencerSelectForm'
import SocialAccountsForm from './SocialAccountsForm';




// --------------------------
// VALIDATION ---------------
// --------------------------
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createProfileSchema } from '../../schemas';


const CreateProfile = () => {


    // VARIABLES ---------------
    const [profileExists, setProfileExists] = useState(null);
    const [formError, setFormError] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null)

    const nav = useNavigate();

    const { values, errors, touched, handleChange, setTouched, validateForm } = useFormik({
        // const formik = useFormik({
        initialValues: {
            username: '',
            bio: '',
            location: '',
            image: '',
            category: '',
            hashtag: '',
            website: '',
            instagram: '',
            youTube: '',
            tikTok: '',
        },

        validationSchema: createProfileSchema
    });




    // API CALLS ---------------
    const submitHandler = async () => {

        // Touch all the inputfields before submission
        setTouched({
            username: true,
            bio: true,
            location: true,
            image: true,
            category: true,
            hashtag: true,
            website: true,
            instagram: true,
            youTube: true,
            tikTok: true,
        });

        const updatedErrors = await validateForm();

        if ((Object.keys(updatedErrors).length === 0) && (Object.keys(errors).length === 0)) {
            setFormError(""); // Clear form errors
            CreateProfileAPI(values, nav, setErrorMessage, setProfileExists);
        } else {
            setFormError('Please fill in all the required fields.');
        }


    }

    console.log(values)
    console.log(errors)

    if (errorMessage) {
        return <ErrorPage error={errorMessage} />
    }

    return (
        <>


            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ pt: { xs: 1, md: 5 }, pb: { xs: 1, md: 5 } }} variant="h2">Create your profile </Typography>

                <Box className="glassmorphism" sx={{
                    gap: 2, flexGrow: 1, mx: { xs: 5, md: 10 }, py: { xs: 1, md: 3 }, pl: { xs: 1, md: 3 }, pr: { xs: 1, md: 10 },
                    display: 'flex', flexDirection: 'row', alignItems: 'center', width: '700px', minHeight: '500px', position: 'relative'
                }}>

                    <Stack>

                        {formError && (
                            <Alert severity="error" sx={{ mb: 2, }}>{formError}</Alert>
                        )}


                    {profileExists && (
                        <Alert severity="error">{profileExists}</Alert>
                    )}


                        <InfluencerBasicInfoForm values={values} handleChange={handleChange} touched={touched} errors={errors} />
                        <InfluencerSelectForm values={values} handleChange={handleChange} touched={touched} errors={errors} />
                        <SocialAccountsForm values={values} handleChange={handleChange} touched={touched} errors={errors} />


                        <MyCustomButton onClick={submitHandler} sx={{ mt: 3, ml: 1 }}>
                            Submit
                        </MyCustomButton>

                    </Stack>

                </Box>
            </Stack>
        </>
    )


};


export default CreateProfile;
