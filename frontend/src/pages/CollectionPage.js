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
// --------------------------
// COMPONENETS ---------------
// --------------------------
import { SOCIALOPTIONS } from '../util/Constants';
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

            <Stack sx={{ display: 'flex', flexDirection: 'row', height: '100vh', pt: 5 }}>
                <Stack className="glassmorphism" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mx: 2, height: '400px', px: 2, py: 2, width: '350px' }}>
                    <SearchBar onChange={handleSearchQueryChange} value={searchQuery} />
                    <Category onCategoryChange={handleCategoryChange} filter={"yes"} />
                    <Location onLocationChange={handleLocationChange} />
                    <Hashtags onHashtagChange={handleHashtagChange} filter={"yes"} />
                </Stack>


                <Stack sx={{ overflow: 'scroll', pb:5 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap', mb: 5, ml: 10 }}>
                        {SOCIALOPTIONS.map((social, index) => (
                            <Box key={index} >
                                <Button
                                    sx={{
                                        "&:hover": {
                                            backgroundColor: "customColors.purple.hover",
                                            borderRadius: '15px'
                                        },
                                        backgroundColor: activeIndex === index   ? "customColors.purple.light" : "initial",
                                        borderRadius: activeIndex === index ? '15px' : 'initial',
                                    }}
                                    onClick={() => handleChangeSocial(social["social"], index)}>
                                    {social["social"]}
                                </Button>
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