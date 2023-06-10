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

// VALIDATION
import { useFormik } from 'formik';
import * as Yup from 'yup';


const CreateProfile = () => {

    // VARIABLES ---------------
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({})
    const [error, setError] = useState(null)

    const [formError, setFormError] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null)

    const nav = useNavigate();

    // const formDataNew = new FormData();
    // formDataNew.append('username', formData.username);
    // formDataNew.append('bio', formData.bio);
    // formDataNew.append('location', formData.location);
    // formDataNew.append('website', formData.website);
    // formDataNew.append('instagram', formData.instagram);
    // formDataNew.append('youTube', formData.youTube);
    // formDataNew.append('tikTok', formData.tikTok);
    // formDataNew.append('hashtag', formData.hashtag);
    // formDataNew.append('category', formData.category);
    // formDataNew.append('image', formData.image);

    const { values, errors, touched, handleBlur, handleChange, setTouched, setFieldTouched, validateForm } = useFormik({
        // const formik = useFormik({
        initialValues: {
            username: '',
            bio: '',
            location: '',
            website: '',
            instagram: '',
            youTube: '',
            tikTok: '',
            hashtag: '',
            category: ''
        },

        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            bio: Yup.string().required('Bio is required'),
            location: Yup.string().required('Location is required'),
            // website: Yup.string().url('Enter valid URL').required('Website is required'),
            // instagram: Yup.string().required('Instagram is required'),
            // youTube: Yup.string().required('YouTube is required'),
            // tikTok: Yup.string().required('TikTok is required'),
            // hashtag: Yup.string().required('Hashtag is required'),
            // category: Yup.string().required('Category is required'),
        }),

    });


    // API CALLS ---------------
    const submitHandler = async () => {

        console.log(values)


        // Touch all the inputfields before submission
        setTouched({
            username: true,
            bio: true,
        });

        setFieldTouched({
            location: true,
        })

        const updatedErrors = await validateForm();

        if ((Object.keys(updatedErrors).length === 0) && (Object.keys(errors).length === 0)) {
            setFormError(""); // Clear form errors
            CreateProfileAPI(values, nav, setErrorMessage);
        } else {
            setFormError('Please fill in all the required fields.');
        }


    }


    // STEPS HANDLER ---------------
    const handleNext = () => {
        if (activeStep === STEPS.length - 1) {

            // API CALL ---------------
            submitHandler()
        } else {
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    // const handleCloseError = () => {
    //     setError(null);
    // };


    // FORM DATA HANDLER ---------------
    // const handleData = (data) => {
    //     setFormData((prevData) => ({ ...prevData, ...data }));
    // }

    // DEFINING STEP CONTENT ---------------
    function getStepContent(step) {
        switch (step) {
            case 0:
                return <InfluencerBasicInfoForm values={values} handleChange={handleChange} touched={touched} errors={errors}/>;
            case 1:
                return <InfluencerSelectForm values={values} handleChange={handleChange} touched={touched} errors={errors}/>;
            case 2:
                return <SocialAccountsForm values={values} handleChange={handleChange} touched={touched} errors={errors}/>
            default:
                throw new Error('Unknown step');
        }
    }

    console.log(values)
    console.log(errors)


    return (
        <>
            <Stack sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ pt: { xs: 1, md: 5 }, pb: { xs: 1, md: 5 } }} variant="h2">Create your profile </Typography>

                {/* {error && <Error error={error} onClose={handleCloseError} />} */}

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
