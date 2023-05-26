import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate, useRouteLoaderData } from "react-router-dom";


import BannerAdvanced from '../components/Banner/BannerAdvanced';
import StepsInfluencerDiscovery from '../components/StepsInfluencerDiscovery/StepsInfluencerDiscovery';
import MyCustomButton from "../components/Button/Button";
import MyCustomTextField from "../components/Form/TextField";
import MeshGradient from '../components/MeshGradient/MeshGradient';
import ChipCollection from '../components/ChipCollection/ChipCollection';
import TextBox from '../components/TextBox/TextBox'

import { Box, Typography } from "@mui/material";


const HomePage = (theme) => {

    return (
        <>

            {/* Add filter to this banner */}
            <BannerAdvanced
                variant="large"
                headline3="I'm looking for Fashion influencer"
                headline4="on Instagram"
                divider={true}
                button="Sign up"
                copy1="Discover Youtube, TikTok, and Instagram influencers"
            />

            <StepsInfluencerDiscovery />

            <Box component="section" className="get-inspired sectionPadding" sx={{ backgroundColor: 'customColors.grey.light' }}>
                <Typography variant="h3" sx={{ marginBottom: 2 }}>get inspired</Typography>
                {/* Card collection of random influencer here */}
            </Box>

        </>
    )


}

export default HomePage;