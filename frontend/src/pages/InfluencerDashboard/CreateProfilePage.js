// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Alert } from '@mui/material';


// --------------------------
// COMPONENTS ---------------
// --------------------------
import InfluencerBasicInfoForm from './InfluencerBasicInfoForm';
import InfluencerSelectForm from './InfluencerSelectForm'
import SocialAccountsForm from './SocialAccountsForm';
import { STEPS } from '../../util/Constants';
import MyCustomButton from '../../components/Button/Button';
import Loader from '../../components/Loader/Loader'
import Error from '../../components/Error/Error'
import CreateProfileAPI from '../../api/CreateProfileAPI'
import ProfileImage from '../../components/Image/ProfileImage';
import Location from '../../components/Location/Location';


// VALIDATION
import { useFormik } from 'formik';
import { createProfileSchema } from '../../schemas';

const CreateProfile = () => {

    // VARIABLES ---------------
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({})
    const [formError, setFormError] = useState(null)
    const nav = useNavigate();

    const { values, errors, touched, setTouched, handleChange, validateForm } = useFormik({
        initialValues: {
            username: '',
            bio: '',
            location: '',
            website: '',
            instagram: '',
            youTube: '',
            tikTok: '',
            hashtag: '',
            category: '',
            image: null, // Assuming `image` is a file input
        },
        validationSchema: createProfileSchema, // Pass the validation schema to useFormik
    });

    // STEPS HANDLER ---------------
    const handleNext = async (event) => {
        if (activeStep === STEPS.length - 1) {
            submitHandler()
        } else {
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    // FORM DATA HANDLER ---------------
    // const handleData = (data) => {
    //     console.log('handledata')
    //     setFormData((prevData) => ({ ...prevData, ...data }));
    // }


    const handleLocationChange = (data) => {
        onDataChange({ location: data });
    }

    const handleImageChange = (data) => {
        onDataChange(data)
    }

    const submitHandler = async (event) => {
        console.log('submithandler')
        const updatedErrors = await validateForm();

        if ((Object.keys(updatedErrors).length === 0) && (Object.keys(errors).length === 0)) {

            const formDataNew = new FormData();
            formDataNew.append('username', values.username);
            formDataNew.append('bio', values.bio);
            formDataNew.append('location', values.location);
            formDataNew.append('website', values.website);
            formDataNew.append('instagram', values.instagram);
            formDataNew.append('youTube', values.youTube);
            formDataNew.append('tikTok', values.tikTok);
            formDataNew.append('hashtag', values.hashtag);
            formDataNew.append('category', values.category);
            formDataNew.append('image', values.image);

            setFormError(""); // Clear form errors
            SignUpAPI(formData, nav, setErrorMessage, setUserExists);
        } else {
            console.log('DUUUUUDE LOADS OF FORM ERRORS')
            setFormError('Please fill in all the required fields.');
        }
    }


    // DEFINING STEP CONTENT ---------------
    function getStepContent(step) {
        switch (step) {
            case 0:
                return <InfluencerBasicInfoForm values={values} onChange={handleChange} onLocationChange={handleLocationChange} onImageChange={handleImageChange}/>;
            case 1:
                return <InfluencerSelectForm onChange={handleChange} />;
            case 2:
                return <SocialAccountsForm onChange={handleChange} />
            default:
                throw new Error('Unknown step');
        }
    }

    console.log(values)
    console.log(formData)
    console.log(errors)


    return (
        <>
            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ pt: { xs: 1, md: 5 }, pb: { xs: 1, md: 5 } }} variant="h2">Create your profile </Typography>

                <Box className="glassmorphism" sx={{
                    gap: 2, flexGrow: 1, mx: { xs: 5, md: 10 }, py: { xs: 1, md: 3 }, pl: { xs: 1, md: 3 }, pr: { xs: 1, md: 10 },
                    display: 'flex', flexDirection: 'row', alignItems: 'center', width: '700px', minHeight: '500px', position: 'relative'
                }}>

                    <Stepper className="glassmorphism" activeStep={activeStep} orientation="vertical"
                        sx={{
                            py: { xs: 1, md: 3 }, pl: { xs: 1, md: 3 }, pr: { xs: 1, md: 8 },
                            borderRadius: '25px', height: '400px'
                        }}>
                        {STEPS.map((label) => (
                            <Step key={label}>
                                <StepLabel >{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {activeStep === STEPS.length ? (
                        <Loader />
                    ) : (
                        <Stack >

                            {formError && (
                                <Alert severity="error">{formError}</Alert>
                            )}

                            <Box>{getStepContent(activeStep)}</Box>

                            <Box sx={{ pb: 3, pl: 8, display: 'flex', justifyContent: 'flex-end', flexDirection: 'row', position: 'absolute', bottom: 0 }}>
                                {activeStep !== 0 && (
                                    <MyCustomButton variant="secondary" onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                        Back
                                    </MyCustomButton>
                                )}


                                <MyCustomButton onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
                                    {activeStep === STEPS.length - 1 ? 'Create profile' : 'Next'}
                                </MyCustomButton>
                            </Box>

                        </Stack>
                    )}
                </Box>
            </Stack>
        </>
    );
}

export default CreateProfile;
