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
// --------------------------
// COMPONENETS ---------------
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

const CollectionPage = () => {

    // VARIABLES ---------------
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryData, setCategoryData] = useState('All categories')
    const [hashtagData, setHashtagData] = useState([]);
    const [socialData, setSocialData] = useState('All');
    const [locationData, setLocationData] = useState('');
    const [profilesData, setProfilesData] = useState(null);
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
            <Stack sx={{ display: 'flex', flexDirection: 'row', height: '100vh', pt: 5 }}>
                <Stack className="glassmorphism" sx={{ display: 'flex', flexDirection: 'column' }}>
                    <SearchBar onChange={handleSearchQueryChange} value={searchQuery} />
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select
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

                    <Stack spacing={3} sx={{ width: 500 }}>
                        <Autocomplete
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
                                    placeholder="Tags"
                                />
                            )}
                        />

                    </Stack>
                    <Location onLocationChange={handleLocationChange} />

                </Stack>


                <Stack sx={{ overflow: 'scroll' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>
                        {SOCIALOPTIONS.map((social, index) => (
                            <Box key={index} >
                                <Button onClick={() => handleChangeSocial(social["social"])}>{social["social"]}</Button>
                            </Box>

                        ))}
                    </Box>
                    <Stack>
                        {profilesData === null ? (
                            <Loader />
                        ) : (

                            <CollectionCard filteringCard={"yes"} array={profilesData} searchQuery={searchQuery} searchCategory={categoryData} searchHashtag={hashtagData} searchSocial={socialData} searchLocation={locationData} />

                        )}
                    </Stack>
                </Stack>

            </Stack>
        </>
    )

}

export default CollectionPage;