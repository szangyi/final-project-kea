// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
// --------------------------
// MATERIAL UI ---------------
// --------------------------
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
// --------------------------
// COMPONENETS ---------------
// --------------------------
import {HASHTAGSOPTIONS, SOCIALOPTIONS } from '../util/Constants';
import CollectionCard from '../components/CollectionCard/CollectionCard'
import Location from '../components/Location/Location';
import SearchBar from '../components/SearchBar/SearchBar';
import Banner from '../components/Banner/Banner';
import Hashtags from '../components/Hashtags/Hashtags';
import Loader from '../components/Loader/Loader'
import Category from '../components/Category/Category'

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

    const handleCategoryChange = (data) => {
        setCategoryData(data.category);
    }

    const handleHashtagChange = (data) => {
        setHashtagData(data.hashtag)
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
                    <Category onCategoryChange={handleCategoryChange} filter={"yes"}/>
                    <Hashtags onHashtagChange={handleHashtagChange} filter={"yes"} />
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