import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Loader from '../components/Loader/Loader'
import CollectionCard from '../components/CollectionCard/CollectionCard'
import MenuItem from '@mui/material/MenuItem';
import Banner from '../components/Banner/Banner';
import ProfileLanding from '../components/Influencer/ProfileLanding';
import MeshGradientBackground from '../components/MeshGradient/MeshGradientBackground';


const UserCollectionPage = () => {

    // VARIABLES ---------------
    const [profilesData, setProfilesData] = useState(null);
    const token = Cookies.get('token');


    // CONNECTING TO API ---------------
    const collectionHandler = async () => {
        try {
            const response = await axios.get("/api/favorites_get_all", {
                headers: {
                    Authorization: `${token}`,
                },
            });

            const profilesData = response.data;
            setProfilesData(profilesData);
        } catch {
            console.log("Getting all profiles failed:");
        }
    };

    // CALLING API FUNCTION ---------------
    collectionHandler();

    const getUniqueCategories = () => {
        if (profilesData) {
            const categories = profilesData.map((profile) => profile[10]);
            return Array.from(new Set(categories));
        }
        return [];
    };


    return (
        <Box>

            <Banner variant="medium" headline1="Your Boards" />


            <Stack className='sectionPadding'>
            {/* <MeshGradientBackground variant="full"></MeshGradientBackground> */}

                {profilesData === null ? (
                    <Loader />
                ) : (

                    getUniqueCategories().map((category) => ( // create sections for categories
                        <Box ey={category}>
                            <h2>{category}</h2>
                            <CollectionCard 
                                array={profilesData.filter((profile) => profile[10] === category)}
                            />
                        </Box>
                    ))

                )}
            </Stack>
        </Box>
    );



}

export default UserCollectionPage;


