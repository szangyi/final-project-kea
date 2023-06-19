// --------------------------
// REACT ---------------
// --------------------------
import { useState } from 'react';
import { useParams } from 'react-router-dom';
// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Box from "@mui/material/Box";
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Alert } from '@mui/material';

// --------------------------
// COMPONENTS ---------------
// --------------------------
import Banner from '../components/Banner/Banner';
import website from '../public/icons/website.png';
import youtube from '../public/icons/youtube.png';
import instagram from '../public/icons/instagram.png';
import tiktok from '../public/icons/tiktok.png';
import Loader from '../components/Loader/Loader'
import CollectionCard from '../components/CollectionCard/CollectionCard'
import GetProfileAPI from '../api/GetProfileAPI';
import ErrorPage from './ErrorPage';

const ProfileLandingPage = () => {
    // VARIABLES ---------------
    const [profileData, setProfileData] = useState([]);
    const [profileExists, setProfileExists] = useState([]);
    const [otherProfiles, setOtherProfiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null)
    const username = useParams();
    console.log(profileExists)
    // CONNECT TO API ---------------
    GetProfileAPI(username, setProfileData, setOtherProfiles, setErrorMessage, setProfileExists);

    if (errorMessage) {
        return <ErrorPage error={errorMessage} />
    }

    return (
        <>
            <Banner variant="medium" headline1={username.username} />

            {profileData.length === 0 ? (
                <>
                    {profileExists && (
                        <Alert severity="error">{profileExists}</Alert>)}
                    <Loader />
                </>


            ) : (
                <>


                    <Stack
                        sx={{ mt: 5, mb: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Stack
                            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <Box
                                component="img"
                                src={`https://influncr.pythonanywhere.com/images/profile_images/${profileData[11]}`}
                                // src={`http://127.0.0.1:7878/profile_images/${profileData[11]}`}
                                sx={{ height: 200, width: 200, borderRadius: '50%' }}
                            />
                            <Stack>
                                <Typography sx={{ fontSize: '40px', fontWeight: '700' }} variant="subtitle2">{username.username}</Typography>
                                <Typography sx={{ fontSize: '26px' }} variant="subtitle1">{profileData[10]}</Typography>
                                <Typography sx={{ fontSize: '16px' }} variant="subtitle1">{profileData[4]}</Typography>
                            </Stack>
                        </Stack>

                        <Stack sx={{ mt: 5, display:'flex', flexDirection:'row' }}>
                            {profileData[14].map((item, index) => (
                                <Chip sx={{mr:2}} icon={<CheckCircleIcon />} color='salmon' key={index} label={item} />

                            ))}
                        </Stack>

                        <Typography sx={{ fontSize: '20px', mt: 5 }} variant="overline">Bio</Typography>
                        <Stack
                            sx={{ backgroundColor: 'customColors.blue.light', height: '100%', width: '50%', px: 10, py: 10, borderRadius: '15px' }}>
                            {profileData[3]}
                        </Stack>

                        <Typography sx={{ fontSize: '20px', mt: 5 }} variant="overline">Linked social accounts</Typography>
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
                        </Stack>
                    </Stack>


                    <Stack>

                        <>
                            {otherProfiles.length === 0 ? (
                                <>
                                </>
                            ) : (
                                <Stack sx={{ backgroundColor: 'customColors.blue.dark', pt: 2, px: 5, pb: 5 }}>
                                    <Typography sx={{ fontSize: '20px', pb: 3, textAlign: 'center', color: '#fff' }} variant="overline">Other profiles from the same influencer</Typography>
                                    <CollectionCard favoriteenabled={false} filteringCard={"no"} array={otherProfiles} />
                                </Stack>
                            )}
                        </>

                    </Stack>
                </>
            )}


        </>
    );



}

export default ProfileLandingPage;


