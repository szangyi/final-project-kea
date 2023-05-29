// --------------------------
// REACT ---------------
// --------------------------
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Box from "@mui/material/Box";
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
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


const ProfileLandingPage = () => {
    // VARIABLES ---------------
    const [profileData, setProfileData] = useState(null);
    const [otherProfiles, setOtherProfiles] = useState(null);
    const username = useParams();
    const token = Cookies.get('token');


    // CONNECT TO API ---------------
    const getProfile = async () => {
        try {
            const response = await axios.post('/api/get-profile', { username }, {
                headers: {
                    Authorization: `${token}`,
                },
            });
            const profileData = response.data.profileData;
            const otherProfiles = response.data.otherProfiles;
            console.log(otherProfiles)
            setProfileData(profileData);
            setOtherProfiles(otherProfiles);


        } catch {
            console.log('getting profile failed');
        }
    }


    getProfile();

    return (
        <>
            <Banner variant="medium" headline1={username.username} />
            {profileData === null ? (
                <Loader />
            ) : (
                <Stack>
                    {profileData.map((data, index) => (
                        <Stack
                            sx={{ mt: 5, mb: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            key={index}>
                            <Stack
                                sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                <Box
                                    component="img"
                                    src={`http://127.0.0.1:7878/profile_images/${data[11]}`}
                                    sx={{ height: 200, width: 200, borderRadius: '50%' }}
                                />
                                <Stack>
                                    <Typography sx={{ fontSize: '40px', fontWeight: '700' }} variant="subtitle2">{username.username}</Typography>
                                    <Typography sx={{ fontSize: '26px' }} variant="subtitle1">{data[10]}</Typography>
                                    <Typography sx={{ fontSize: '16px' }} variant="subtitle1">{data[4]}</Typography>
                                </Stack>
                            </Stack>

                            <Stack sx={{ mt: 5 }}>
                                <Chip icon={<CheckCircleIcon />} color='salmon' key={data[9]} label={data[9]} />
                            </Stack>

                            <Typography sx={{ fontSize: '20px', mt: 5 }} variant="overline">Bio</Typography>
                            <Stack
                                sx={{ backgroundColor: 'customColors.blue.light', height: '100%', width: '50%', px: 10, py: 10, borderRadius: '15px' }}>
                                {data[3]}
                            </Stack>

                            <Typography sx={{ fontSize: '20px', mt: 5 }} variant="overline">Linked social accounts</Typography>
                            <Stack
                                sx={{ mt: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                {data[5] && (
                                    <div>
                                        <a href={`/${data[5]}`}><img src={website} alt="web" /></a>
                                    </div>
                                )}
                                {data[6] && (
                                    <div>
                                        <a href={`/${data[6]}`}><img src={instagram} alt="instagram" /></a>
                                    </div>
                                )}
                                {data[7] && (
                                    <div>
                                        <a href={`/${data[6]}`}><img src={youtube} alt="youtube" /></a>
                                    </div>
                                )}
                                {data[8] && (
                                    <div>
                                        <a href={`/${data[6]}`}><img src={tiktok} alt="tiktok" /></a>
                                    </div>
                                )}
                            </Stack>
                        </Stack>

                    ))}

                    <Stack>
                        {otherProfiles === [] ? (
                            <Stack></Stack>
                        ) : (
                            <Stack sx={{ backgroundColor: 'customColors.blue.dark', pt: 2, px: 5, pb: 5 }}>
                                <Typography sx={{ fontSize: '20px', pb: 3, textAlign: 'center', color: '#fff' }} variant="overline">Other profiles from the same influencer</Typography>
                                <CollectionCard filteringCard={"no"} array={otherProfiles} />
                            </Stack>
                        )}
                    </Stack>
                </Stack>
            )}


        </>
    );



}

export default ProfileLandingPage;


