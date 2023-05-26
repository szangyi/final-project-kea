// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

// --------------------------
// COMPONENTS ---------------
// --------------------------
import BasicInfo from '../../components/Influencer/Form/BasicInfo';
import Category from '../../components/Influencer/Form/Category';
import ProfileImage from '../../components/Influencer/Form/ProfileImage';
import SocialAccounts from '../../components/Influencer/Form/SocialAccounts';
import Hashtags from '../../components/Influencer/Form/Hashtags';
import { STEPS } from '../../util/Constants';
import MyCustomButton from '../../components/Button/Button';



const CreateProfile = () => {

  // VARIABLES ---------------
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({})
  const token = Cookies.get('token');
  const nav = useNavigate();

  // STEPS HANDLER ---------------
  const handleNext = () => {
    if (activeStep === STEPS.length - 1) {
      createInfluencerProfile();
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // FORM DATA HANDLER ---------------
  const handleData = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  }

  // DEFINING STEP CONTENT ---------------
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <BasicInfo onDataChange={handleData} />;
      case 1:
        return <Category onDataChange={handleData} />;
      case 2:
        return <Hashtags onDataChange={handleData} />;
      case 3:
        return <ProfileImage onDataChange={handleData} />
      case 4:
        return <SocialAccounts onDataChange={handleData} />
      default:
        throw new Error('Unknown step');
    }
  }


  // POSTING DATA TO API ---------------
  const createInfluencerProfile = async () => {
    const formDataNew = new FormData();
    formDataNew.append('username', formData.username);
    formDataNew.append('bio', formData.bio);
    formDataNew.append('location', formData.location);
    formDataNew.append('website', formData.website);
    formDataNew.append('instagram', formData.instagram);
    formDataNew.append('youTube', formData.youTube);
    formDataNew.append('tikTok', formData.tikTok);
    formDataNew.append('hashtag', formData.hashtag);
    formDataNew.append('category', formData.category);
    formDataNew.append('image', formData.image);

    try {
      const response = await axios.post('/api/create-profile', formDataNew, {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response) {
        nav('/dashboard');
      } else {
        console.log("Something went wrong")
      }

    } catch {
      console.log('Create profile failed:');
    }
  }


  return (
    <>
    <Stack sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Typography sx={{ pt: { xs: 1, md: 5 }, pb: { xs: 1, md: 5 }}} variant="h2">Create your profile </Typography>

      <Box className="glassmorphism" sx={{
        gap: 2, flexGrow: 1, mx: { xs: 5, md: 10 }, py: { xs: 1, md: 3 }, pl: { xs: 1, md: 3 }, pr: { xs: 1, md: 8 },
        display: 'flex', flexDirection: 'row', width: {xs:'250px', md:'800px'}
      }}>

        <Stepper activeStep={activeStep} orientation="vertical"
          sx={{
            backgroundColor: 'customColors.purple.light',
            py: { xs: 1, md: 3 }, pl: { xs: 1, md: 3 }, pr: { xs: 1, md: 8 },
            borderRadius: '25px'
          }}>
          {STEPS.map((label) => (
            <Step key={label}>
              <StepLabel >{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === STEPS.length ? (
          <Stack>
            {/* Redirect */}
          </Stack>
        ) : (
          <Stack>
            {getStepContent(activeStep)}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'row' }}>
              {activeStep !== 0 && (
                <MyCustomButton variant="secondary" onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </MyCustomButton>
              )}

              <MyCustomButton  onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
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
