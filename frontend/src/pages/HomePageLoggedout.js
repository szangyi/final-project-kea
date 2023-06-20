import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate, useRouteLoaderData } from "react-router-dom";


import Banner from '../components/Banner/Banner';
import StepsInfluencerDiscovery from '../components/StepsInfluencerDiscovery/StepsInfluencerDiscovery';
import MyCustomButton from "../components/Button/Button";
import MyCustomTextField from "../components/Form/TextField";
import MeshGradient from '../components/MeshGradient/MeshGradient';
import ChipCollection from '../components/ChipCollection/ChipCollection';
import TextBox from '../components/TextBox/TextBox'
import { Box } from '@mui/material';

const HomePage = (theme) => {

    return (
        <>

            <Banner
                variant="large"
                headline1="People trust people"
                headline2="not ads"
                copy1="And we are here to help you to find your rocks."
                copy2="People who motivates you - to be a better you!"
                button="Sign up"
                href="/signup"
                miniCardsEnabled
            />

            <StepsInfluencerDiscovery />

            <ChipCollection
                headline="100% verified influencers"
                copy="Explore our extensive list of topics and uncover influencers who excel in their fields. Unlock a world of knowledge, creativity, and expertise, and browse in topics such as"
            />

            <Box className="signup-cta-section">
                <TextBox
                    headline="Start discovering today"
                    copy1="Join our community of motivated individuals and embark on a journey of inspiration and growth. Take the first step towards a brighter future. Sign up today and tap into the transformative power of influential voices."
                    button="sign up"
                    href="/signup"
                />
            </Box>

        </>
    )


}

export default HomePage;