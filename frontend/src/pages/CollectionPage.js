// --------------------------
// REACT ---------------
// --------------------------
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { handleWindowSizeChange } from '../util/detectMediaQuery'

// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import { Grid, Typography } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';


// --------------------------
// COMPONENTS ---------------
// --------------------------
import { SOCIALOPTIONS } from '../util/Constants';
import CollectionCard from '../components/CollectionCard/CollectionCard'
import Location from '../components/Location/Location';
import SearchBar from '../components/SearchBar/SearchBar';
import Banner from '../components/Banner/Banner';
import Hashtags from '../components/Hashtags/Hashtags';
import Category from '../components/Category/Category'
import GetAllProfilesAPI from '../api/GetAllProfilesAPI';
import ErrorPage from './ErrorPage';
import MyCustomChipMinimal from '../components/Chip/ChipMinimal';
import Puller from '../components/Drawer/Puller';
import MyCustomButton from '../components/Button/Button';

const CollectionPage = () => {

    // VARIABLES ---------------
    const drawerBleeding = 100;
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryData, setCategoryData] = useState('All categories')
    const [hashtagData, setHashtagData] = useState([]);
    const [socialData, setSocialData] = useState('All');
    const [locationData, setLocationData] = useState('');
    const [profilesData, setProfilesData] = useState(null);
    const [selected, setSelected] = useState('All');
    const [errorMessage, setErrorMessage] = useState(null)
    const allOptionIndex = SOCIALOPTIONS.findIndex(option => option.social === 'All');
    const [mediaQuery, setMediaQuery] = useState("");
    const [open, setOpen] = React.useState(false);
    const location = useLocation();
    const filters = location.state?.filters;

    useEffect(() => {
        const handleResize = () => handleWindowSizeChange(setMediaQuery);
        handleResize()
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array to run the effect only once on mount


    if (filters) {
        useEffect(() => {
            handleCategoryChange(filters);
            handleChangeSocial(filters.social)
        }, [filters]);
    }



    // HANDLERS ---------------
    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCategoryChange = (data) => {
        setCategoryData(data.category);
    }

    const handleHashtagChange = (data) => {
        console.log(data)
        setHashtagData(data.hashtag)
    }

    const handleChangeSocial = (social) => {
        setSelected((prevSelected) => (prevSelected === social ? 'All' : social));
        setSocialData((prevSocialData) => (prevSocialData === social ? 'All' : social));
    };

    const handleLocationChange = (data) => {
        setLocationData(data)
    }

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    // CALLING API FUNCTION ---------------
    GetAllProfilesAPI(setProfilesData, setErrorMessage)


    if (errorMessage) {
        return <ErrorPage error={errorMessage} />
    }

    return (
        <>

            <Banner variant="medium" headline1="Find your influencer" />

            <Grid container sx={{ minHeight: '100vh', mx: 1, }}>

                {/* ---------------- */}
                {/* FILTERS */}

                {mediaQuery === 'desktop' ? (
                    <>
                        <Grid item xs={12} md={3} className="" sx={{ py: 5, pl: 2, pr: 3, display: 'flex', flexDirection: 'column', gap: 4, height: '90vh' }}>
                            <Typography variant="h5">Filters</Typography>

                            <SearchBar onChange={handleSearchQueryChange} value={searchQuery} />

                            <Box>
                                <Typography variant="body1" sx={{ fontWeight: '800', mb: 1 }} > Category</Typography>

                                {filters && filters.category && (
                                    <Category
                                        onCategoryChange={handleCategoryChange}
                                        customFilters={filters.category}
                                        filter="yes"
                                    />
                                )}
                                {(!filters || !filters.category) && (
                                    <Category
                                        onCategoryChange={handleCategoryChange}
                                        filter="yes"
                                    />
                                )}

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
                    </>
                ) : (
                    <>

                        <Stack sx={{ display: 'flex', width: '100%', flexDirection: 'column', mt: 3, pl: { xs: 1, sm: 3 }, pr: { xs: 3, sm: 6 } }}>
                            <SearchBar onChange={handleSearchQueryChange} value={searchQuery} />

                            <Box sx={{ textAlign: 'start', pt: 1, my: 2 }}>
                                <MyCustomButton variant="secondary" onClick={toggleDrawer(true)}>More filters</MyCustomButton>
                            </Box>
                        </Stack>

                        <SwipeableDrawer
                            className="filter-drawer"
                            anchor="bottom"
                            open={open}
                            onClose={toggleDrawer(false)}
                            onOpen={toggleDrawer(true)}
                            swipeAreaWidth={drawerBleeding}
                            disableSwipeToOpen={false}
                            ModalProps={{
                                keepMounted: true,
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    borderTopLeftRadius: 8,
                                    borderTopRightRadius: 8,
                                    visibility: 'visible',
                                    right: 0,
                                    left: 0,
                                    padding: 2,
                                }}
                            >
                                <Puller />

                                <Typography variant="h5">Filters</Typography>

                                <Box sx={{ mt: 4 }}>
                                    <Typography variant="body1" sx={{ fontWeight: '800', mb: 1 }} > Category</Typography>
                                    <Category onCategoryChange={handleCategoryChange} filter={"yes"} />
                                </Box>
                                <Box sx={{ mt: 4 }}>
                                    <Typography variant="body1" sx={{ fontWeight: '800', mb: 1 }} > Location</Typography>
                                    <Location onLocationChange={handleLocationChange} />
                                </Box>
                                <Box sx={{ mt: 4 }}>
                                    <Typography variant="body1" sx={{ fontWeight: '800', mb: 1 }} > Hashtags</Typography>
                                    <Hashtags onHashtagChange={handleHashtagChange} filter={"yes"} />
                                </Box>

                            </Box>
                            <Box
                                sx={{
                                    px: 2,
                                    pb: 2,
                                    height: '100%',
                                    overflow: 'auto',
                                }}
                            >
                            </Box>
                        </SwipeableDrawer>

                    </>
                )}



                {/* ---------------- */}
                {/* COLLECTION */}
                <Grid item xs={12} md={9} sx={{ pt: { xs: 1, md: 5 }, pl: { xs: 1, sm: 3 }, pb: 3, pr: { xs: 3, sm: 6 }, overflow: 'auto', borderLeft: { xs: '0', md: '1px solid' }, borderLeftColor: { xs: 'transparent', md: 'customColors.grey.light' } }}>
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
                                searchLocation={locationData}
                                collection = "yes"
                                />
                        )}
                    </Stack>
                </Grid>

            </Grid>
        </>
    )

}

export default CollectionPage;