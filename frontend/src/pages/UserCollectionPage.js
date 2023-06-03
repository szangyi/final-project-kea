// --------------------------
// REACT ---------------
// --------------------------
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
// --------------------------
// COMPONENTS ---------------
// --------------------------
import Loader from '../components/Loader/Loader'
import CollectionCard from '../components/CollectionCard/CollectionCard'
import Banner from '../components/Banner/Banner';
import MeshGradientBackground from '../components/MeshGradient/MeshGradientBackground';
import { Typography } from '@mui/material';
import TextBox from '../components/TextBox/TextBox'
import FavoritesGetAllAPI from '../api/FavoritesGetAllAPI';
import Error from '../components/Error/Error'

const UserCollectionPage = () => {

    // VARIABLES ---------------
    const [favoritesData, setFavoritesData] = useState(null);
    const [error, setError] = useState(null)
    const token = Cookies.get('token');
    const nav = useNavigate();


    // HANDLERS ---------------
    const handleCloseError = () => {
        setError(null);
    };

    // CALLING API FUNCTION ---------------
    FavoritesGetAllAPI(token, setFavoritesData, setError)

    // GET UNIQUE CATEGORIES ---------------
    const getUniqueCategories = () => {
        if (favoritesData) {
            const categories = favoritesData.map((profile) => profile[10]);
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

                {favoritesData === null ? (
                    <Loader />
                ) : (
                    <>
                        {favoritesData === "error" ? (
                            <>
                                {nav('/error', { state: { message: error.message, status: error.status } })}
                            </>
                        ) : (
                            <>
                                {favoritesData === [] ? (
                                    <Stack></Stack>
                                ) : (
                                    getUniqueCategories().map((category) => ( // create sections for categories
                                        <Box key={category}>
                                            <Typography sx={{ mt: 5, mb: 3 }} variant="h3">{category}</Typography>
                                            <CollectionCard
                                                array={favoritesData.filter((profile) => profile[10] === category)}
                                            />
                                        </Box>
                                    ))
                                )}
                            </>
                         )}

                    </>
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


