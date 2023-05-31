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
import MeshGradientBackground from '../components/MeshGradient/MeshGradientBackground';
import { Typography } from '@mui/material';
import TextBox from '../components/TextBox/TextBox'



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
        <>

            <Banner variant="medium" headline1="Your Boards" />

            <MeshGradientBackground variant="full"></MeshGradientBackground>

            <Stack className='sectionPadding'>

                <Typography variant="body">
                    Your charming boards you will find here, by category. Enjoy!
                </Typography>

                {profilesData === null ? (
                    <Loader />
                ) : (

                    getUniqueCategories().map((category) => ( // create sections for categories
                        <Box key={category}>
                            <Typography sx={{ mt: 5, mb: 3 }} variant="h3">{category}</Typography>
                            <CollectionCard
                                array={profilesData.filter((profile) => profile[10] === category)}
                            />
                        </Box>
                    ))

                )}
            </Stack>


            <TextBox
                bg="customColors.blue.dark"
                color="white"
                headline="discover more!"
                copy1="For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions"
                button="find your influencer"
                href=""
            />
        </>
    );



}

export default UserCollectionPage;


