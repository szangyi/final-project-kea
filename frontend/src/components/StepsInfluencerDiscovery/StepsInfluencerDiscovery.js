import "./StepsInfluencerDiscovery.css"

import React from 'react';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import collageLandscape from '../../assets/collage-landscape.png'
import collagePortrait from '../../assets/collage-portrait.png'


import { Box, Grid, Typography } from "@mui/material";

function getSteps() {
    return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`;
        case 1:
            return 'An ad group contains one or more ads which target a shared set of keywords.';
        case 2:
            return `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`;
        default:
            return 'Unknown step';
    }
}


const StepsInfluencerDiscovery = (props) => {

    // const theme = useTheme();


    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };



    return (
        <Box component="section" className="steps-influencer-discovery sectionPadding" sx={{ my: 5}}>

            <Grid container spacing={{ xs: 10, sm: 5, lg: 10 }} >
                <Grid item xs={12} md={8} lg={6}>

                    <Typography variant="subtitle1" sx={{ color: 'customColors.salmon.dark' }}>Influencer discovery</Typography>
                    <Typography variant="h3" sx={{ marginBottom: 2 }}>find your influencers</Typography>


                    <div>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((label, index) => (
                                <Step active={true} key={label}>
                                    <StepLabel><Typography variant="h6">{label}</Typography></StepLabel>
                                    <StepContent>
                                        <Typography>{getStepContent(index)}</Typography>
                                        <div className="actionsContainer">
                                            <div>
                                                {/* <Button
                                                    disabled={activeStep === 0}
                                                    onClick={handleBack}
                                                >
                                                    Back
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={handleNext}
                                                >
                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </Button> 

                                                 */}
                                            </div>
                                        </div>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length && (
                            <Paper square elevation={0} className={"resetContainer"}>
                                <Typography>All steps completed - you&apos;re finished</Typography>
                                <Button onClick={handleReset}>
                                    Reset
                                </Button>
                            </Paper>
                        )}
                    </div>
                </Grid>

                <Grid item xs={12} md={4} lg={6} sx={{display: 'flex', flexDirection:'column', justifyContent:'center' }}>
                    <img className="mobile desktop" style={{ height: 'auto', width: '100%' }} src={collageLandscape} alt="Collage of influencers" />
                    <img className="tablet" style={{ height: 'auto', width: 'auto' }} src={collagePortrait} alt="Collage of influencers" />
                </Grid>

            </Grid>

        </Box>
    )
}


export default StepsInfluencerDiscovery;