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
import { Stack, Alert } from '@mui/material';
import ErrorPage from '../ErrorPage'


// --------------------------
// COMPONENTS ---------------
// --------------------------
import CreateProfileAPI from '../../api/CreateProfileAPI'
import MyCustomButton from '../../components/Button/Button';
import InfluencerBasicInfoForm from './InfluencerBasicInfoForm';
import InfluencerSelectForm from './InfluencerSelectForm'
import SocialAccountsForm from './SocialAccountsForm';
import MeshGradientBackground from '../../components/MeshGradient/MeshGradientBackground';


// --------------------------
// VALIDATION ---------------
// --------------------------
import { useFormik } from 'formik';
import { createProfileSchema } from '../../schemas';



const CreateProfile = () => {

    // VARIABLES ---------------
    const [profileExists, setProfileExists] = useState(null);
    const [formError, setFormError] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null)

    const nav = useNavigate();

    const { values, errors, touched, handleChange, setTouched, validateForm } = useFormik({
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


    // ERROR PAGE ---------------
    if (errorMessage) {
        return <ErrorPage error={errorMessage} />
    }

    return (
        <>

            <MeshGradientBackground variant="full" />

            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', width: { xs: '100%', md: '80%', lg: '60%' } }}>
                <Typography sx={{ pt: { xs: 1, md: 5 }, pb: { xs: 1, md: 5 } }} variant="h3">Create your profile </Typography>

                <Box className="glassmorphism" sx={{
                    gap: 2, flexGrow: 1, mx: { xs: 2, sm: 5, md: 10 }, p: { xs: 3, md: 5 },
                    display: 'flex', flexDirection: 'row', alignItems: 'center', _width: '700px', minHeight: '500px', position: 'relative'
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
