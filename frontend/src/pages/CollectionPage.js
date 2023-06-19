// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import { Grid, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Skeleton from '@mui/material/Skeleton';

// --------------------------
// COMPONENTS ---------------
// --------------------------
import { SOCIALOPTIONS } from '../util/Constants';
import CollectionCard from '../components/CollectionCard/CollectionCard'
import Location from '../components/Location/Location';
import SearchBar from '../components/SearchBar/SearchBar';
import Banner from '../components/Banner/Banner';
import Hashtags from '../components/Hashtags/Hashtags';
import Loader from '../components/Loader/Loader'
import MeshGradientBackground from '../components/MeshGradient/MeshGradientBackground';
import Category from '../components/Category/Category'
import GetAllProfilesAPI from '../api/GetAllProfilesAPI';
import ErrorPage from './ErrorPage';
import MyCustomChipMinimal from '../components/Chip/ChipMinimal';

const CollectionPage = () => {

    // VARIABLES ---------------
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryData, setCategoryData] = useState('All categories')
    const [hashtagData, setHashtagData] = useState([]);
    const [socialData, setSocialData] = useState('All');
    const [locationData, setLocationData] = useState('');
    const [profilesData, setProfilesData] = useState(null);
    const [selected, setSelected] = useState('All');
    const [errorMessage, setErrorMessage] = useState(null)
    const allOptionIndex = SOCIALOPTIONS.findIndex(option => option.social === 'All');
    const [activeIndex, setActiveIndex] = useState(allOptionIndex);


    // HANDLERS ---------------
    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCategoryChange = (data) => {
        setCategoryData(data.category);
    }

    const handleHashtagChange = (data) => {
        setHashtagData(data.hashtag)
    }

    const handleChangeSocial = (social) => {
        setSelected((prevSelected) => (prevSelected === social ? null : social));
        // setSelected((prevSelected) => (prevSelected === social ? 'All' : social));
        setSocialData((prevSocialData) => (prevSocialData === social ? 'All' : social));
    };


    const handleLocationChange = (data) => {
        setLocationData(data)
    }

    // CALLING API FUNCTION ---------------
    GetAllProfilesAPI(setProfilesData, setErrorMessage)


    if (errorMessage) {
        return <ErrorPage error={errorMessage} />
    }

    return (
        <>

            <Banner variant="medium" headline1="Find your influencer" />
            {/* <MeshGradientBackground variant="full"></MeshGradientBackground> */}

            {/* <Grid container sx={{ display: 'flex', flexDirection: 'row', height: '100vh', pt: 5 }}> */}
            <Grid container sx={{ minHeight: '100vh', mx: 1, }}>

                {/* ---------------- */}
                {/* FILTERS */}
                <Grid item xs={3} className="" sx={{ py: 5, pl: 2, pr: 3, display: 'flex', flexDirection: 'column', gap: 4, height: '90vh' }}>
                    <Typography variant="h5">Filters</Typography>

                    <SearchBar onChange={handleSearchQueryChange} value={searchQuery} />

                    <Box>
                        <Typography variant="body1" sx={{ fontWeight: '800', mb: 1 }} > Category</Typography>
                        <Category onCategoryChange={handleCategoryChange} filter={"yes"} />
                    </Box>
                    <Box>
                        <Typography variant="body1" sx={{ fontWeight: '800', mb: 1 }} > Location</Typography>
                        <Location onLocationChange={handleLocationChange} />
                    </Box>
                    <Box>
                        <Typography variant="body1" sx={{ fontWeight: '800', mb: 1 }} > Hashtags</Typography>
                        <Hashtags onHashtagChange={handleHashtagChange} filter={"yes"} />
                    </Box>
                </Grid>

                {/* ---------------- */}
                {/* COLLECTION */}
                <Grid item xs={9} sx={{ pt: 5, pl: 3, pb: 3, pr: 6, overflow: 'auto', borderLeft: '1px solid', borderLeftColor: 'customColors.grey.light' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                        {SOCIALOPTIONS.map((social, index) => (
                            <MyCustomChipMinimal
                                sx={{ px: 1 }}
                                key={index}
                                onClick={() => handleChangeSocial(social["social"])}
                                label={social["social"]}
                                className={selected === social["social"] ? "selected" : ""}
                                // color={selected === social["social"] ? "primary" : "default"}
                                variant="outlined"
                                disableRipple
                            />

                        ))}
                    </Box>

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

                            <CollectionCard
                                favoriteenabled={true}
                                filteringCard={"yes"}
                                array={profilesData}
                                searchQuery={searchQuery}
                                searchCategory={categoryData}
                                searchHashtag={hashtagData}
                                searchSocial={socialData}
                                searchLocation={locationData} />
                        )}
                    </Stack>
                </Grid>

            </Grid>
        </>
    )

}

export default CollectionPage;