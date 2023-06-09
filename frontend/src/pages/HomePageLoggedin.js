import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRoutes } from "react-router-dom";


import BannerAdvanced from '../components/Banner/BannerAdvanced';
import StepsInfluencerDiscovery from '../components/StepsInfluencerDiscovery/StepsInfluencerDiscovery';
import MyCustomButton from "../components/Button/Button";
import MyCustomTextField from "../components/Form/TextField";
import MeshGradient from '../components/MeshGradient/MeshGradient';
import ChipCollection from '../components/ChipCollection/ChipCollection';
import TextBox from '../components/TextBox/TextBox'
import GetRandomProfilesAPI from '../api/GetRandomProfilesAPI';
import Loader from '../components/Loader/Loader'
import CollectionCard from '../components/CollectionCard/CollectionCard'
import ErrorPage from './ErrorPage';



import { Box, Typography, Stack } from "@mui/material";


const HomePageLoggedin = (theme) => {

    // VARIABLES ---------------
    const [profilesData, setProfilesData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null)
    const numProfilesToShow = 4

    // CALLING API FUNCTION ---------------
    // GetRandomProfilesAPI(token, setProfilesData, setError)
    useEffect(() => {
        if (!profilesData) {
            GetRandomProfilesAPI(setProfilesData, setErrorMessage, numProfilesToShow)
        }
    }, [profilesData]);

    if (errorMessage) {
        return <ErrorPage error={errorMessage}/>
    }

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

                <Stack>
                    {profilesData === null ? (
                        <Loader />
                    ) : (
                        <>

                            <CollectionCard favoriteenabled={false} array={profilesData} />

                        </>
                    )}
                </Stack>

            </Box>

        </>
    )


}

export default HomePageLoggedin;