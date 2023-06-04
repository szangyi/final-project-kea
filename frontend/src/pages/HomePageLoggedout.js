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

const HomePage = (theme) => {

    return (
        <>

            <Banner
                variant="large"
                headline1="people trust people"
                headline2="not ads"
                copy1="And we are here to help you to find your rocks."
                copy2="People who motivates you - to be a better you!"
                button="Sign up"
            />

            <StepsInfluencerDiscovery />

            <ChipCollection
                headline="100% verified influencers"
                copy="Browse in topics such as"
            />

            <TextBox
                headline="start discovering today"
                copy1="For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions"
                button="sign up"
            />


        </>
    )


}

export default HomePage;