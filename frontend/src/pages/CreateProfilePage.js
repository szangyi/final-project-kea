import React, { useState } from 'react';
import axios from 'axios';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

import BasicInfo from '../components/Influencer/Form/BasicInfo';
import Category from '../components/Influencer/Form/Category';
import ProfileImage from '../components/Influencer/Form/ProfileImage';
import SocialAccounts from '../components/Influencer/Form/SocialAccounts';
import Hashtags from '../components/Influencer/Form/Hashtags';

const steps = ['Basic info', 'Category','Hashtags', 'Profile image', 'Social accounts'];



const theme = createTheme();



const CreateProfile = () => {

  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState({})
  const token = Cookies.get('token');
  const nav = useNavigate();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      createInfluencerProfile();
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleData = (data) =>{
    setFormData((prevData) => ({ ...prevData, ...data }));
  }



  function getStepContent(step) {
    switch (step) {
      case 0:
        return <BasicInfo onDataChange={handleData}/>;
      case 1:
        return <Category onDataChange={handleData}/>;
      case 2:
          return <Hashtags onDataChange={handleData}/>;
      case 3:
        return <ProfileImage onDataChange={handleData}/>
      case 4:
        return <SocialAccounts onDataChange={handleData} />
      default:
        throw new Error('Unknown step');
    }
  }


  console.log(formData)

    const createInfluencerProfile = async() =>{
      try {
          const response = await axios.post('/api/create-profile', { formData }, {
            headers: {
                Authorization: `${token}`,
            }
        });

          nav('/dashboard');

      } catch (error) {
          console.error('Create profile failed:', error.response.error);
      }
  }


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>

          <Typography component="h1" variant="h4" align="center">
            Create your profile
          </Typography>

          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length ? (
            <React.Fragment>
              {/* Redirect */}
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Create profile' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default CreateProfile;
