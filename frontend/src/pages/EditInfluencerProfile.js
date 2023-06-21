// --------------------------
// REACT ---------------
// --------------------------
import { useState, use } from 'react';
import { useParams } from 'react-router-dom';
import AccountInfoAPI from '../api/AccountInfoAPI';

// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Box from "@mui/material/Box";
import { Grid, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';

// --------------------------
// COMPONENTS ---------------
// --------------------------
import Banner from '../components/Banner/Banner';
import Loader from '../components/Loader/Loader'
import GetProfileAPI from '../api/GetProfileAPI';
import ErrorPage from './ErrorPage';
import MyCustomTextField from "../components/Form/TextField";
import Location from '../components/Location/Location';
import Category from '../components/Category/Category'
import Hashtags from '../components/Hashtags/Hashtags';
import MyCustomButton from '../components/Button/Button';

// --------------------------
// VALIDATION ---------------
// --------------------------
import { useFormik } from 'formik';
import { createProfileSchema } from '../schemas';

const EditInfluencerProfile = () => {
    // VARIABLES ---------------
    const [profileData, setProfileData] = useState([]);
    const [profileExists, setProfileExists] = useState([]);
    const [otherProfiles, setOtherProfiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null)
    const username = useParams();
    const [userData, setUserData] = useState(null);
    const [formError, setFormError] = useState(null);
    const [selectedValue, setSelectedValue] = useState('initialValue');
    const [hashtagData, setHashtagData] = useState([]);

    // CONNECT TO API ---------------
    GetProfileAPI(username, setProfileData, setOtherProfiles, setErrorMessage, setProfileExists)


    // VALIDATION ---------------
    const { values, errors, touched, handleChange, handleBlur, setTouched, validateForm } = useFormik({
        // const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: profileData ? profileData[2] : '',
            bio: profileData ? profileData[3] : '',
            location: profileData ? profileData[4] : '',
            image: profileData ? profileData[11] : '',
            category: profileData ? profileData[10] : '',
            hashtag: profileData ? profileData[14] : '',
            website: profileData ? profileData[5] : '',
            instagram: profileData ? profileData[6] : '',
            youTube: profileData ? profileData[7] : '',
            tikTok: profileData ? profileData[8] : '',
        },

        validationSchema: createProfileSchema
    });

    console.log(profileData)

    // HANDLERS ---------------
    const handleLocationChange = (value) => {
        handleChange({ target: { name: 'location', value } });
    };

    const handleCategoryChange = (value) => {
        handleChange({ target: { name: 'category', value } });
    };
    const handleHashtagChange = (data) => {
        setHashtagData(data.hashtag)
    }



    const submitHandler = async () => {

        // Touch all the inputfields before submission
        setTouched({
            username: true,
            bio: true,
            location: true,
            image: true,
            category: true,
            hashtag: true,
            website: true,
            instagram: true,
            youTube: true,
            tikTok: true,
        });

        const updatedErrors = await validateForm();

        if ((Object.keys(updatedErrors).length === 0) && (Object.keys(errors).length === 0)) {
            setFormError(""); // Clear form errors
            // CreateProfileAPI();
        } else {
            setFormError('Please fill in all the required fields.');
        }


    }




    if (errorMessage) {
        return <ErrorPage error={errorMessage} />
    }


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
                            sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 5 }}>

                            <Box className="image-container" sx={{ mt: -10, }}>
                                <Box
                                    component="img"
                                    src={`https://influncr.pythonanywhere.com/images/profile_images/${profileData[11]}`}
                                    // src={`http://127.0.0.1:7878/profile_images/${profileData[11]}`}
                                    sx={{ height: { xs: 200, md: 300 }, width: { xs: 200, md: 300 }, borderRadius: '50%', border: '3px solid white', objectFit: 'cover' }}
                                />
                            </Box>
                            <Stack sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                                <Box>
                                    <MyCustomTextField
                                        size="normal"
                                        margin="normal"
                                        fullWidth
                                        id="username"
                                        label="Username"
                                        name="username"
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.username && Boolean(errors.username)}
                                        helperText={touched.username && errors.username}
                                    />

                                    <Category
                                        onCategoryChange={handleCategoryChange}
                                        valueEdit="yes"
                                        value={profileData[10]}
                                        error={touched.category && Boolean(errors.category)}
                                        helperText={touched.category && errors.category}
                                    />
                                </Box>

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
                                    <MyCustomTextField
                                        margin="normal"
                                        multiline
                                        fullWidth
                                        name="bio"
                                        label="Write about yourself"
                                        type="text"
                                        id="bio"
                                        value={values.bio}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.bio && Boolean(errors.bio)}
                                        helperText={touched.bio && errors.bio}
                                    />

                                </Box>

                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 400, mb: 2, mt: 5 }}>
                                        Hashtags
                                    </Typography>
                                    {profileData[14].map((item, index) => (
                                        <Chip key={index} label={item} />
                                    ))}
                                    {/* <Chip key={profileData[9]} label={profileData[9]} /> */}
                                    <Hashtags onHashtagChange={handleHashtagChange} value={profileData[14]} valueEdit="yes" />

                                </Box>

                                <Box>

                                    <Typography variant="h6" sx={{ fontWeight: 400, mb: 1, mt: 5 }}>
                                        Location
                                    </Typography>
                                    <Location
                                        onLocationChange={handleLocationChange}
                                        valueEdit="yes"
                                        value={values.location}
                                        error={touched.location && Boolean(errors.location)}
                                        helperText={touched.location && errors.location}
                                    />
                                </Box>

                            </Grid>


                            {/* GRID ITEM 2 */}
                            <Grid item xs={12} md={5} >

                                {profileData[5] && (
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 400, mb: 1, display: 'flex', alignItems: 'center', mt: { xs: 5, md: 0 } }}>
                                            Website <LanguageIcon fontSize="small" sx={{ ml: 1 }} />
                                        </Typography>
                                        <MyCustomTextField
                                            size="normal"
                                            margin="normal"
                                            fullWidth
                                            id="website"
                                            label="Website"
                                            name="website"
                                            autoComplete="website"
                                            value={values.website}
                                            onChange={handleChange}
                                            error={touched.website && Boolean(errors.website)}
                                            helperText={touched.website && errors.website}
                                        />
                                    </Box>
                                )}

                                {profileData[6] && (
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 400, mb: 1, mt: 5, display: 'flex', alignItems: 'center' }}>
                                            Instagram <InstagramIcon fontSize="small" sx={{ ml: 1 }} />
                                        </Typography>
                                        <MyCustomTextField
                                            size="normal"
                                            margin="normal"
                                            fullWidth
                                            id="instagram"
                                            label="Instagram"
                                            name="instagram"
                                            autoComplete="instagram"
                                            value={values.instagram}
                                            onChange={handleChange}
                                            error={touched.instagram && Boolean(errors.instagram)}
                                            helperText={touched.instagram && errors.instagram}
                                        />

                                    </Box>
                                )}

                                {profileData[7] && (
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 400, mb: 1, mt: 5, display: 'flex', alignItems: 'center' }}>
                                            YouTube <YouTubeIcon fontSize="small" sx={{ ml: 1 }} />
                                        </Typography>
                                        <MyCustomTextField
                                            size="normal"
                                            margin="normal"
                                            fullWidth
                                            id="youTube"
                                            label="YouTube"
                                            name="youTube"
                                            autoComplete="youTube"
                                            value={values.youTube}
                                            onChange={handleChange}
                                            error={touched.youTube && Boolean(errors.youTube)}
                                            helperText={touched.youTube && errors.youTube}
                                        />
                                    </Box>
                                )}

                                {profileData[8] && (
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 400, mb: 1, mt: 5, display: 'flex', alignItems: 'center' }}>
                                            TikTok <MusicVideoIcon fontSize="small" sx={{ ml: 1 }} />
                                        </Typography>
                                        <MyCustomTextField
                                            size="normal"
                                            margin="normal"
                                            fullWidth
                                            id="tikTok"
                                            label="TikTok"
                                            name="tikTok"
                                            autoComplete="tikTok"
                                            value={values.tikTok}
                                            onChange={handleChange}
                                            error={touched.tikTok && Boolean(errors.tikTok)}
                                            helperText={touched.tikTok && errors.tikTok}
                                        />
                                    </Box>
                                )}


                            </Grid>


                        </Grid>

                        <MyCustomButton
                            onClick={submitHandler}
                            sx={{ mt: 6, mb: 2, ml: { xs: 4 } }}
                        >
                            Save changes
                        </MyCustomButton>




                    </Stack>








                </>
            )
            }


        </>
    );



}

export default EditInfluencerProfile;


