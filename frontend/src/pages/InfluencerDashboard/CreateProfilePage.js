
// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';
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
import Autocomplete from '@mui/material/Autocomplete';




// --------------------------
// COMPONENTS ---------------
// --------------------------
import MyCustomTextField from "../../components/Form/TextField";
import ProfileImage from '../../components/Image/ProfileImage';
import { LOCATION } from '../../util/Constants';
import CreateProfileAPI from '../../api/CreateProfileAPI'
import MyCustomButton from '../../components/Button/Button';





// --------------------------
// VALIDATION ---------------
// --------------------------
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InfluencerBasicInfoForm from './InfluencerBasicInfoForm';
import { createProfileSchema } from '../../schemas';


const CreateProfile = () => {


    // VARIABLES ---------------
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({})
    const [error, setError] = useState(null)

    const [formError, setFormError] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null)

    const nav = useNavigate();

    const { values, errors, touched, handleBlur, handleChange, setTouched, setFieldTouched, validateForm } = useFormik({
        // const formik = useFormik({
        initialValues: {
            username: '',
            bio: '',
            location: '',
            image: '',
            website: '',
            instagram: '',
            youTube: '',
            tikTok: '',
            hashtag: '',
            category: ''
        },

        validationSchema: createProfileSchema
    });




    // API CALLS ---------------
    const submitHandler = async () => {

        console.log(values)

        // Touch all the inputfields before submission
        setTouched({
            username: true,
            bio: true,
            location: true,
            image: true,
        });

        const updatedErrors = await validateForm();

        if ((Object.keys(updatedErrors).length === 0) && (Object.keys(errors).length === 0)) {
            setFormError(""); // Clear form errors
            CreateProfileAPI(values, nav, setErrorMessage);
        } else {
            setFormError('Please fill in all the required fields.');
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

                    <Stack>

                    {formError && (
                                <Alert severity="error" sx={{mb: 2,}}>{formError}</Alert>
                            )}


                        <InfluencerBasicInfoForm values={values} handleChange={handleChange} touched={touched} errors={errors} />


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
