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
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Grid, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';

// --------------------------
// COMPONENTS ---------------
// --------------------------
import { SOCIALOPTIONS, HASHTAGSOPTIONS } from '../util/Constants';
import CollectionCard from '../components/CollectionCard/CollectionCard'
import Location from '../components/Location/Location';
import SearchBar from '../components/SearchBar/SearchBar';
import Banner from '../components/Banner/Banner';
import Hashtags from '../components/Hashtags/Hashtags';
import Loader from '../components/Loader/Loader'
import MeshGradientBackground from '../components/MeshGradient/MeshGradientBackground';
import Category from '../components/Category/Category'

const CollectionPage = () => {

    // VARIABLES ---------------
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryData, setCategoryData] = useState('All categories')
    const [hashtagData, setHashtagData] = useState([]);
    const [socialData, setSocialData] = useState('All');
    const [locationData, setLocationData] = useState('');
    const [profilesData, setProfilesData] = useState(null);
    const [selected, setSelected] = useState('');
    const allOptionIndex = SOCIALOPTIONS.findIndex(option => option.social === 'All');
    const [activeIndex, setActiveIndex] = useState(allOptionIndex);

    const token = Cookies.get('token');

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

    const handleChangeSocial = (social, index) => {
        setSocialData(social)
        setSelected((prevSelected) => (prevSelected === social ? null : social));

        setActiveIndex(index);
    }


    const handleLocationChange = (data) => {
        setLocationData(data)
    }

    // CONNECTING TO API ---------------
    const collectionHandler = async () => {
        try {
            const response = await axios.get('/api/profiles', {
                headers: {
                    Authorization: `${token}`,
                }
            },
            );

            const profilesData = response.data;

            setProfilesData(profilesData);

        } catch {
            console.log('Getting all profiles failed:');
        }
    }

    // CALLING API FUNCTION ---------------
    collectionHandler();


    return (
        <>

            <Banner variant="medium" headline1="Find your influencer" />
            <MeshGradientBackground variant="full"></MeshGradientBackground>

            {/* <Grid container sx={{ display: 'flex', flexDirection: 'row', height: '100vh', pt: 5 }}> */}
            <Grid container sx={{ minHeight: '100vh', my: 5, mx: 2, }}>

                {/* ---------------- */}
                {/* FILTERS */}
                <Grid item xs={3} className="glassmorphism" sx={{ display: 'flex', flexDirection: 'column', p: 3, gap: 3, height: '90vh' }}>

                    <SearchBar onChange={handleSearchQueryChange} value={searchQuery} />
                    <Category onCategoryChange={handleCategoryChange} filter={"yes"} />
                    <Location onLocationChange={handleLocationChange} />
                    <Hashtags onHashtagChange={handleHashtagChange} filter={"yes"} />



                </Grid>

                {/* ---------------- */}
                {/* COLLECTION */}
                <Grid item xs={9} sx={{ overflow: 'auto', pl: 3, pb: 3, pr: 6 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                        {SOCIALOPTIONS.map((social, index) => (
                            <Chip
                                sx={{ px: 1 }}
                                key={index}
                                onClick={() => handleChangeSocial(social["social"])}
                                label={social["social"]}
                                color={selected === social["social"] ? "primary" : "default"}
                                variant={selected === social["social"] ? "default" : "outlined"}
                            />

                        ))}
                    </Box>

                    <Stack>
                        {profilesData === null ? (
                            <Loader />
                        ) : (
                            <CollectionCard filteringCard={"yes"} array={profilesData} searchQuery={searchQuery} searchCategory={categoryData} searchHashtag={hashtagData} searchSocial={socialData} searchLocation={locationData} />
                        )}
                    </Stack>
                </Grid>

            </Grid>
        </>
    )

}

export default CollectionPage;