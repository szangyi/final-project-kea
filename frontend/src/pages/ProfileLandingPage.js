// --------------------------
// REACT ---------------
// --------------------------
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddToFavoritesAPI from '../api/AddToFavoritesAPI';
import AccountInfoAPI from '../api/AccountInfoAPI';

// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Box from "@mui/material/Box";
import { Grid, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';

// --------------------------
// COMPONENTS ---------------
// --------------------------
import Banner from '../components/Banner/Banner';
import Loader from '../components/Loader/Loader'
import CollectionCard from '../components/CollectionCard/CollectionCard'
import GetProfileAPI from '../api/GetProfileAPI';
import ErrorPage from './ErrorPage';
import TextBox from '../components/TextBox/TextBox';

const ProfileLandingPage = () => {
    // VARIABLES ---------------
    const [profileData, setProfileData] = useState([]);
    const [profileExists, setProfileExists] = useState([]);
    const [otherProfiles, setOtherProfiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null)
    const username = useParams();
    const [userData, setUserData] = useState(null);

    // CONNECT TO API ---------------
    AccountInfoAPI(setUserData);
    GetProfileAPI(username, setProfileData, setOtherProfiles, setErrorMessage, setProfileExists);

    console.log(userData)

    // API CALLS ---------------
    const handleAddToFavorites = (influencerid) => {
        AddToFavoritesAPI(influencerid, setErrorMessage)
    }


    if (errorMessage) {
        return <ErrorPage error={errorMessage} />
    }

    console.log(profileData)

    return (
        <>
            <Banner variant="small" _headline1={username.username} />

            {profileData.length === 0 ? (
                <>
                    {/* {profileExists && (
                        <Alert severity="error">{profileExists}</Alert>)} */}

                    <Loader />
                </>


            ) : (
                <>
                    <Stack className="profile-section"
                        sx={{ mb: 5, pb: 10, display: 'flex', flexDirection: 'column', px: { xs: 3, lg: 10 } }}>

                        {/* HEADER */}
                        <Stack
                            sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: 'center', gap: 5 }}>

                            <Box className="image-container" sx={{ mt: -10, }}>
                                <Box
                                    component="img"
                                    src={`https://influncr.pythonanywhere.com/images/profile_images/${profileData[11]}`}
                                    // src={`http://127.0.0.1:7878/profile_images/${profileData[11]}`}
                                    sx={{ height: { xs: 200, md: 300 }, width: { xs: 200, md: 300 }, borderRadius: '50%', border: '3px solid white', objectFit: 'cover' }}
                                />
                            </Box>
                            <Stack sx={{width: '100%', display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>

                                <Box>
                                    <Typography sx={{ mb: 1 }} variant="h3">{username.username}</Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
                                        {/* Category: */}
                                        {profileData[10]}
                                    </Typography>
                                </Box>

                                <IconButton sx={{height: 'fit-content'}}  onClick={() => handleAddToFavorites(profileData[0])}>
                                    {profileData[14] ? <FavoriteIcon sx={{ color: 'customColors.salmon.dark' }} /> : <FavoriteBorderIcon sx={{ color: 'customColors.salmon.dark' }} />}
                                    {/* <FavoriteBorderIcon sx={{ color: 'customColors.salmon.dark' }} /> */}
                                </IconButton>
                                
                            </Stack>


                        </Stack>

                        {/* GRID */}
                        <Grid container sx={{ mt: { xs: 2, md: 8 }, pt: { xs: 2, md: 0 }, borderTop: { xs: '1px solid lightgrey', md: '0' } }}>

                            {/* GRID ITEM 1 */}
                            <Grid item xs={12} md={6} sx={{ marginRight: 6 }}>
                                <Box>
                                    <Typography variant="h4" sx={{ mb: 2 }}>
                                        About me
                                    </Typography>
                                    <Typography variant="body1">
                                        {profileData[3]}
                                    </Typography>
                                </Box>

                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 400, mb: 2, mt: 5 }}>
                                        Hashtags
                                    </Typography>
                                    <Chip key={profileData[9]} label={profileData[9]} />

                                </Box>

                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 400, mb: 1, mt: 5 }}>
                                        Location
                                    </Typography>
                                    <Typography variant="body2">
                                        {profileData[4]}
                                    </Typography>
                                </Box>

                            </Grid>


                            {/* GRID ITEM 2 */}
                            <Grid item xs={12} md={5} >

                                {profileData[5] && (
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 400, mb: 1, display: 'flex', alignItems: 'center', mt: { xs: 5, md: 0 } }}>
                                            Website <LanguageIcon fontSize="small" sx={{ ml: 1 }} />
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            <a style={{ display: 'flex', alignItems: 'center' }} href={profileData[5]}>{profileData[5]} <ArrowOutwardIcon fontSize="small" /> </a>
                                        </Typography>
                                    </Box>
                                )}

                                {profileData[6] && (
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 400, mb: 1, mt: 5, display: 'flex', alignItems: 'center' }}>
                                            Instagram <InstagramIcon fontSize="small" sx={{ ml: 1 }} />
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            <a style={{ display: 'flex', alignItems: 'center' }} href={profileData[6]}> {profileData[6]} <ArrowOutwardIcon fontSize="small" /> </a>
                                        </Typography>
                                    </Box>
                                )}

                                {profileData[7] && (
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 400, mb: 1, mt: 5, display: 'flex', alignItems: 'center' }}>
                                            YouTube <YouTubeIcon fontSize="small" sx={{ ml: 1 }} />
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            <a style={{ display: 'flex', alignItems: 'center' }} href={profileData[7]}  >{profileData[7]} <ArrowOutwardIcon fontSize="small" /> </a>
                                        </Typography>
                                    </Box>
                                )}

                                {profileData[8] && (
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 400, mb: 1, mt: 5, display: 'flex', alignItems: 'center' }}>
                                            TikTok <MusicVideoIcon fontSize="small" sx={{ ml: 1 }} />
                                        </Typography>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            <a style={{ display: 'flex', alignItems: 'center' }} href={profileData[8]} >{profileData[8]} <ArrowOutwardIcon fontSize="small" /> </a>
                                        </Typography>
                                    </Box>
                                )}


                            </Grid>


                        </Grid>




                    </Stack>



                    {/* <Typography sx={{ fontSize: '20px', mt: 5 }} variant="overline">Linked social accounts</Typography>
                    <Stack
                        sx={{ mt: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                        {profileData[5] && (
                            <div>
                                <a href={`/${profileData[5]}`}><img src={website} alt="web" /></a>
                            </div>
                        )}
                        {profileData[6] && (
                            <div>
                                <a href={`/${profileData[6]}`}><img src={instagram} alt="instagram" /></a>
                            </div>
                        )}
                        {profileData[7] && (
                            <div>
                                <a href={`/${profileData[6]}`}><img src={youtube} alt="youtube" /></a>
                            </div>
                        )}
                        {profileData[8] && (
                            <div>
                                <a href={`/${profileData[6]}`}><img src={tiktok} alt="tiktok" /></a>
                            </div>
                        )}
                    </Stack> */}



                    {otherProfiles.length === 0 ? (
                        <>
                        </>
                    ) : (
                        <Stack sx={{ backgroundColor: 'customColors.grey.lighter', pt: 2, px: { xs: 3, lg: 10 }, pb: 5 }}>
                            <Typography sx={{ textAlign: 'center', mb: 5, mt: 5 }} variant="h4">Other profiles from the same influencer</Typography>
                            <CollectionCard favoriteenabled={false} filteringCard={"no"} array={otherProfiles} />
                        </Stack>
                    )}


                    <TextBox
                        bg="customColors.blue.dark"
                        color="white"
                        headline="Explore more influencers!"
                        copy1="Are you hungry for more inspiration? Look no further. Discover new voices, fresh perspectives, and hidden gems that can elevate your journey to new heights."
                        button="Browse"
                        href="/collection"
                        />

                </>
            )
            }


        </>
    );



}

export default ProfileLandingPage;


