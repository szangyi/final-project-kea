// --------------------------
// REACT ---------------
// --------------------------
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import Skeleton from '@mui/material/Skeleton';

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
import ErrorPage from './ErrorPage';

const UserCollectionPage = () => {

    // VARIABLES ---------------
    const [favoritesData, setFavoritesData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null)

    // CALLING API FUNCTION ---------------
    FavoritesGetAllAPI(setFavoritesData, setErrorMessage)

    // GET UNIQUE CATEGORIES ---------------
    const getUniqueCategories = () => {
        if (favoritesData) {
            const categories = favoritesData.map((profile) => profile[10]);
            return Array.from(new Set(categories));
        }
        return [];
    };

    console.log("favoritesData:", favoritesData);

    if (errorMessage) {
        return <ErrorPage error={errorMessage} />
    }

    return (
        <>

            <Banner
                variant="medium"
                headline1="Your Collection"
                copy1="Curate your personal gallery of inspiration"
                miniCardsEnabledSmall
            />
            <Stack className='sectionPadding'>
                {favoritesData === null ? (
                    // <Loader />

                    <>
                        <Box sx={{ mb: 20, mt: { xs: 5, lg: 0 } }} >
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>


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
                    <>
                        {favoritesData == 0 ? (
                            <Stack>
                                <Typography variant="h3">No favorites available</Typography>
                                <Typography variant="body">You haven't added any favorites yet.</Typography>
                            </Stack>
                        ) : (
                            <>
                                <Typography variant="h6" sx={{ mb: 5, mt: { xs: 5, lg: 0 }, width: { xs: '100%', md: '70%' } }}>
                                    Explore your collection and let the power of your hand-picked influencers unlock new levels of inspiration. <span style={{ fontWeight: '800', fontStyle: 'italic', textDecoration: 'underline' }}>Together</span>, let's shape a gallery of motivation that will fuel your dreams and aspirations.
                                </Typography>

                                {getUniqueCategories().map((category) => (
                                    // create sections for categories
                                    <Box key={category}>
                                        <Typography sx={{ mt: 5, mb: 3 }} variant="h3">{category}</Typography>
                                        <CollectionCard
                                            favoriteenabled={true}
                                            array={favoritesData.filter((profile) => profile[10] === category)}
                                        />
                                    </Box>
                                ))}
                            </>
                        )}
                    </>
                )}
            </Stack>

            {favoritesData === null ? (
                <> </>
            ) : (
                <>
                    {favoritesData == 0 ? (
                        <TextBox
                            bg="customColors.blue.dark"
                            color="white"
                            headline="Find your influencer!"
                            copy1="Are you hungry for inspiration? Look no further. Discover new voices, fresh perspectives, and hidden gems that can elevate your journey to new heights."
                            button="Browse"
                            href=""
                        />
                    ) : (
                        <TextBox
                            bg="customColors.blue.dark"
                            color="white"
                            headline="Explore more influencers!"
                            copy1="Are you hungry for more inspiration? Look no further. Discover new voices, fresh perspectives, and hidden gems that can elevate your journey to new heights."
                            button="Browse"
                            href="/collection"
                        />
                    )}
                </>
            )
            }
        </>
    );



}

export default UserCollectionPage;


