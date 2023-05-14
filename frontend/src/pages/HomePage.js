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


const HomePage = (theme) => {

    return (
        <>

            <Banner
                headline1="people trust people"
                headline2="not ads"
                copy1="And we are here to help you to find your rocks."
                copy2="People who motivates you - to be a better you!"
                button="Sign up"
            />

            <StepsInfluencerDiscovery />

            <ChipCollection
                headline1="100% verified influencers"
                copy1="Browse in topics such as"

                
            />


        </>
    )


}

export default HomePage;