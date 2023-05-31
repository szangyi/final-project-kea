// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';

// --------------------------
// MATERIAL UI ---------------
// --------------------------
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
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
import { CATEGORYOPTIONS, HASHTAGSOPTIONS, SOCIALOPTIONS } from '../util/Constants';
import CollectionCard from '../components/CollectionCard/CollectionCard'
import Location from '../components/Location/Location';
import SearchBar from '../components/SearchBar/SearchBar';
import Banner from '../components/Banner/Banner';
import Hashtags from '../components/Hashtags/Hashtags';
import Loader from '../components/Loader/Loader'
import Cookies from 'js-cookie';
import axios from 'axios';
import MeshGradientBackground from '../components/MeshGradient/MeshGradientBackground';

const CollectionPage = () => {

    // VARIABLES ---------------
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryData, setCategoryData] = useState('All categories')
    const [hashtagData, setHashtagData] = useState([]);
    const [socialData, setSocialData] = useState('All');
    const [locationData, setLocationData] = useState('');
    const [profilesData, setProfilesData] = useState(null);
    const [selected, setSelected] = useState('');

    const token = Cookies.get('token');

    // HANDLERS ---------------
    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategoryData(event.target.value);
    }

    const handleHashtagChange = (event, value) => {
        const selectedTags = value.map((item) => item.tag);
        setHashtagData(selectedTags)
    }

    const handleChangeSocial = (social) => {
        setSocialData(social)
        setSelected((prevSelected) => (prevSelected === social ? null : social));

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
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select
                            sx={{ borderRadius: '15px' }}
                            labelId="category"
                            id="category"
                            value={categoryData || 'All categories'}
                            label="Category"
                            onChange={handleCategoryChange}
                        >
                            <MenuItem value="All categories">All Categories</MenuItem>

                            {CATEGORYOPTIONS.map((option, index) => (
                                <MenuItem key={index} value={option.category}>
                                    {option.category}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Stack spacing={8} sx={{}}>
                        <Autocomplete
                            sx={{ m: '16.5px 6px 16.5px 14px' }}
                            multiple
                            id="hashtags"
                            options={HASHTAGSOPTIONS}
                            getOptionLabel={(option) => (option && option.tag) || ''}
                            onChange={handleHashtagChange}
                            value={HASHTAGSOPTIONS.filter(option => hashtagData.includes(option.tag))}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    label="Search with tags"
                                    placeholder=""
                                />
                            )}
                        />

                    </Stack>
                    <Location onLocationChange={handleLocationChange} />

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