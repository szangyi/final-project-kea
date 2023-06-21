// --------------------------
// REACT ---------------
// --------------------------
import React from 'react';


// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Box, Grid, Typography } from "@mui/material";


// --------------------------
// COMPONENTS ---------------
// --------------------------
import collageLandscape from '../../assets/collage-landscape.png'
import collagePortrait from '../../assets/collage-portrait-small.png'


// --------------------------
// STYLES ---------------
// --------------------------
import "./StepsInfluencerDiscovery.css"




function getSteps() {
    return ['Create a profile', 'Explore influencers', 'Save collections and stay inspired'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return "Get started by setting up your personalized profile. Tell us a bit about yourself, your interests, and your goals, that reflects your unique journey!";
        case 1:
            return "Dive into our vast influencer database and unleash the power of choice. Browse influencers by categories, hashtags, interests, and apply various filters to find the perfect match.";
        case 2:
            return "Collect your favorite influencers and keep them at your fingertips. Create a go-to library of motivation and guidance that you can access anytime, to stay up-to-date with the latest content and insights.";
        default:
            return "Unknown step";
    }
}


const StepsInfluencerDiscovery = (props) => {

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    return (
        <Box component="section" className="steps-influencer-discovery sectionPadding" sx={{ my: 5 }}>

            <Grid container spacing={{ xs: 10, sm: 5, lg: 10 }} >
                <Grid item xs={12} md={8} lg={6}>

                    <Typography variant="subtitle1" sx={{ color: 'customColors.salmon.dark' }}>Influencer discovery</Typography>
                    <Typography variant="h3" sx={{ marginBottom: 2 }}>Discover influencers in 3 simple steps</Typography>


                    <div>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((label, index) => (
                                <Step active={true} key={label}>
                                    <StepLabel><Typography variant="h6" sx={{ marginBottom: 0 }}>{label}</Typography></StepLabel>
                                    <StepContent sx={{ paddingBottom: 4 }}>
                                        <Typography>{getStepContent(index)}</Typography>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                    </div>
                </Grid>

                <Grid item xs={12} md={4} lg={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <img className="mobile desktop" style={{ height: 'auto', width: '100%' }} src={collageLandscape} alt="Collage of influencers" />
                    <img className="tablet" style={{ height: 'auto', width: 'auto' }} src={collagePortrait} alt="Collage of influencers" />
                </Grid>

            </Grid>

        </Box>
    )
}


export default StepsInfluencerDiscovery;