import './CollectionCard.css'

// --------------------------
// REACT ---------------
// --------------------------
import Cookies from 'js-cookie';
import axios from 'axios';
import { Link } from 'react-router-dom';

// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';



const CollectionCard = ({ array, filteringCard, searchQuery, searchCategory, searchHashtag, searchSocial, searchLocation }) => {

    // VARIABLES ---------------
    const token = Cookies.get('token');
    let cardArray;

    // CONNECTING TO API ---------------
    const handleAddToFavorites = async (influencerID) => {
        try {
            const response = await axios.post('/api/add-to-favorites', { influencerID }, {
                headers: {
                    Authorization: `${token}`,
                }
            },
            );

            console.log(response)

        } catch {
            console.log('Getting all profiles failed:');
        }
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


    return (

        <Container disableGutters sx={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>

            {cardArray.map((array, index) => (
                <Box className="card-container">
                    <Card className="card glassmorphism" key={index} sx={{ width: 350 }}>
                        <Box className="card-image-container" sx={{ borderRadius: '15px', mx: 3, my: 3 }}>
                            <CardMedia
                                component="img"
                                alt="profile image"
                                sx={{ borderRadius: '15px' }}
                                // image={`http://127.0.0.1:7878/profile_images/${array[11]}`}
                                image={'https://images.unsplash.com/photo-1571566882372-1598d88abd90?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODU0NTg1OTZ8&ixlib=rb-4.0.3&q=85'}
                            />
                            <CardActions>
                                <IconButton onClick={() => handleAddToFavorites(array[0])}>
                                    {array[14] ? <FavoriteIcon sx={{ color: 'customColors.salmon.dark' }} /> : <FavoriteBorderIcon sx={{ color: 'customColors.salmon.dark' }} />}
                                </IconButton>
                            </CardActions>
                        </Box>

                        <Box className="card-content-container" sx={{ mx: 3, my: 3 }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {array[2]}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Category: {array[10]}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {/* Tags: {array[9].substring(1, array[9].length - 1).replace(/,/g, ' ')} */}
                                    Tags: {array[9]}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Location: {array[4]}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {array[5] && (
                                    <div>
                                        <LanguageIcon></LanguageIcon>
                                        {/* <a href={`/${array[5]}`}>WEB</a> */}
                                    </div>
                                )}
                                {array[6] && (
                                    <div>
                                        <InstagramIcon></InstagramIcon>
                                        {/* <a href={`/${array[6]}`}>IG</a> */}
                                    </div>
                                )}
                                {array[7] && (
                                    <div>
                                        <YouTubeIcon></YouTubeIcon>
                                        {/* <a href={`/${array[6]}`}>YT</a> */}
                                    </div>
                                )}
                                {array[8] && (
                                    <div>
                                        <MusicVideoIcon></MusicVideoIcon>
                                        {/* <a href={`/${array[6]}`}>TK</a> */}
                                    </div>
                                )}
                            </CardActions>
                            {/* <CardActions>
                                {array[5] && (
                                    <div>
                                        <a href={`/${array[5]}`}>WEB</a>
                                    </div>
                                )}
                                {array[6] && (
                                    <div>
                                        <a href={`/${array[6]}`}>IG</a>
                                    </div>
                                )}
                                {array[7] && (
                                    <div>
                                        <a href={`/${array[6]}`}>YT</a>
                                    </div>
                                )}
                                {array[8] && (
                                    <div>
                                        <a href={`/${array[6]}`}>TK</a>
                                    </div>
                                )}
                            </CardActions> */}
                            <CardActions>
                                {/* <IconButton onClick={() => handleAddToFavorites(array[0])}>
                                    {array[14] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                </IconButton> */}
                                <Button component={Link} to={`/profile/${array[2]}`} size="small">View profile</Button>
                            </CardActions>
                        </Box>
                    </Card>
                </Box>
            ))}

        </Container>
    );
}

export default CollectionCard;


