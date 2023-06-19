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
import MiniCard from '../components/Card/MiniCard';
import Skeleton from '@mui/material/Skeleton';



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
        return <ErrorPage error={errorMessage} />
    }

    return (
        <>

            {/* <BannerAdvanced
                variant="large"
                headline3="I'm looking for Fashion influencer"
                headline4="on Instagram"
                divider={true}
                button="Discover"
                href="/collection"
                copy1="Discover Youtube, TikTok, and Instagram influencers"
                miniCardsEnabled
            /> */}

            {/* Add filter to this banner */}
            <BannerAdvanced />

            <StepsInfluencerDiscovery />

            <ChipCollection
                headline="100% verified influencers"
                copy="Explore our extensive list of topics and uncover influencers who excel in their fields. Unlock a world of knowledge, creativity, and expertise, and browse in topics such as"
            />


            <Box component="section" className="get-inspired sectionPadding" sx={{ backgroundColor: 'customColors.grey.light' }}>
                <Typography variant="h3" sx={{ marginBottom: 4 }}>Get inspired</Typography>

                <Stack>
                    {profilesData === null ? (
                        // <Loader />

                        <>
                            <Stack sx={{ display: 'flex', flexDirection: 'row', gap: { xs: 1, md: 5 }, }}>
                                <Box sx={{ width: 'fit-content' }}>
                                    <Skeleton sx={{ borderRadius: '15px' }} variant="rounded" width={300} height={300} />
                                    <Box sx={{ pt: 0.5, width: 300 }}>
                                        <Skeleton />
                                        <Skeleton width="60%" />
                                    </Box>
                                </Box>
                                <Box sx={{ width: 'fit-content' }}>
                                    <Skeleton sx={{ borderRadius: '15px' }} variant="rounded" width={300} height={300} />
                                    <Box sx={{ pt: 0.5, width: 300 }}>
                                        <Skeleton />
                                        <Skeleton width="60%" />
                                    </Box>
                                </Box>
                                <Box sx={{ width: 'fit-content' }}>
                                    <Skeleton sx={{ borderRadius: '15px' }} variant="rounded" width={300} height={300} />
                                    <Box sx={{ pt: 0.5, width: 300 }}>
                                        <Skeleton />
                                        <Skeleton width="60%" />
                                    </Box>
                                </Box>
                            </Stack>
                        </>


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