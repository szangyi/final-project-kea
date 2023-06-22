// --------------------------
// REACT ---------------
// --------------------------
import React, { useState, useEffect } from 'react';


// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Skeleton from '@mui/material/Skeleton';
import { Box, Typography, Stack } from "@mui/material";


// --------------------------
// COMPONENTS ---------------
// --------------------------
import ChipCollection from '../components/ChipCollection/ChipCollection';
import GetRandomProfilesAPI from '../api/GetRandomProfilesAPI';
import CollectionCard from '../components/CollectionCard/CollectionCard'
import ErrorPage from './ErrorPage';
import BannerAdvanced from '../components/Banner/BannerAdvanced';
import StepsInfluencerDiscovery from '../components/StepsInfluencerDiscovery/StepsInfluencerDiscovery';




const HomePageLoggedin = (theme) => {

    // VARIABLES ---------------
    const [profilesData, setProfilesData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null)
    const numProfilesToShow = 4


    // CALLING API FUNCTION ---------------
    useEffect(() => {
        if (!profilesData) {
            GetRandomProfilesAPI(setProfilesData, setErrorMessage, numProfilesToShow)
        }
    }, [profilesData]);


    // ERROR PAGE ---------------
    if (errorMessage) {
        return <ErrorPage error={errorMessage} />
    }

    
    return (
        <>

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