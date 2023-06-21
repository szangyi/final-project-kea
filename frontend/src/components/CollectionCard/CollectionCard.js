import './CollectionCard.css'

// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --------------------------
// REACT ---------------
// --------------------------
import AddToFavoritesAPI from '../../api/AddToFavoritesAPI';
import ErrorPage from '../../pages/ErrorPage';


// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';



const CollectionCard = ({ array, filteringCard, favoriteenabled, searchQuery, searchCategory, searchHashtag, searchSocial, searchLocation }) => {
    // VARIABLES ---------------
    const [errorMessage, setErrorMessage] = useState(null)
    let cardArray;

    // API CALLS ---------------
    const handleAddToFavorites = (influencerid) => {
        AddToFavoritesAPI(influencerid, setErrorMessage)
    }

    if (errorMessage) {
        return <ErrorPage error={errorMessage} />
    }

    // CHECKING WHICH ARRAY SHOULD BE RETURNED ---------------
    if (filteringCard == 'yes') {

        // FILTERING OF PROFILES ---------------
        const filteredProfile = array.filter((profile) => {
            const matchesSearchQuery = profile[2].toLowerCase().includes(searchQuery.toLowerCase());

            const matchesCategory = searchCategory === 'All categories' || profile[10] === searchCategory;

            const convertHashtag = JSON.parse(profile[9]);
            const matchesHashtags = searchHashtag.length === 0 || convertHashtag.includes(searchHashtag);

            const matchesLocation = searchLocation === '' || profile[4] === searchLocation;


            if (searchSocial === 'All' || profile[5] && searchSocial === 'Website' || profile[6] && searchSocial === 'Instagram' || profile[7] && searchSocial === 'Youtube' || profile[8] && searchSocial === 'Tiktok') {
                return matchesSearchQuery && matchesCategory && matchesHashtags && matchesLocation;
            }

            return false;
        });

        cardArray = filteredProfile;

    } else {
        cardArray = array;
    }

    console.log(cardArray)


    return (

        <Grid className="cards-container" container sx={{ gap: '20px' }}>
            {/* <Container disableGutters sx={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}> */}

            {cardArray.map((array, index) => (
                <Grid key={index} item className="card-container">

                    <Card className="card" sx={{ mb: 2 }}
                    // sx={{ width: 350 }}
                    >

                        <CardContent className='card-content' sx={{padding: 0}}>

                            <Box className="card-image-container" sx={{ borderRadius: '10px' }}>
                                <CardMedia
                                    component="img"
                                    alt="profile image"
                                    sx={{}}
                                    // image={`https://influncr.pythonanywhere.com/images/profile_images/${array[11]}`}
                                image={`http://127.0.0.1:7878/profile_images/${array[11]}`}
                                />
                                {favoriteenabled &&
                                    <CardActions className='card-fav'>
                                        <IconButton onClick={() => handleAddToFavorites(array[0])}>
                                            {array[14] ? <FavoriteIcon sx={{ color: 'customColors.salmon.dark' }} /> : <FavoriteBorderIcon sx={{ color: 'customColors.salmon.dark' }} />}
                                        </IconButton>
                                    </CardActions>
                                }

                            </Box>

                            <Box className="card-content-container" sx={{ mt: 1 }}>
                                <Box>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {array[2]}
                                    </Typography>
                                    <Typography gutterBottom variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
                                        {/* Category: */}
                                        {array[10]}
                                    </Typography>
                                    <Typography gutterBottom variant="body2" color="text.secondary">
                                        {/* Tags: */}
                                        {filteringCard == 'yes' ? array[15]: array[14]}
                                    </Typography>
                                    <Typography gutterBottom variant="body2" color="text.secondary">
                                        {/* Location: */}
                                        {array[4]}
                                    </Typography>
                                </Box>
                                <CardActions className="icons-container" sx={{ gap: 0 }}>
                                    {array[5] && (
                                        <div>
                                            <LanguageIcon fontSize="small"></LanguageIcon>
                                            {/* <a href={`/${array[5]}`}>WEB</a> */}
                                        </div>
                                    )}
                                    {array[6] && (
                                        <div>
                                            <InstagramIcon fontSize="small"></InstagramIcon>
                                            {/* <a href={`/${array[6]}`}>IG</a> */}
                                        </div>
                                    )}
                                    {array[7] && (
                                        <div>
                                            <YouTubeIcon fontSize="small"></YouTubeIcon>
                                            {/* <a href={`/${array[6]}`}>YT</a> */}
                                        </div>
                                    )}
                                    {array[8] && (
                                        <div>
                                            <MusicVideoIcon fontSize="small"></MusicVideoIcon>
                                            {/* <a href={`/${array[6]}`}>TK</a> */}
                                        </div>
                                    )}
                                </CardActions>

                            </Box>

                        </CardContent>

                        <CardActions className="card-click">
                            <Box component={Link} to={`/profile/${array[2]}`}></Box>
                        </CardActions>
                    </Card>
                </Grid>
            ))}

        </Grid>
    );
}

export default CollectionCard;


