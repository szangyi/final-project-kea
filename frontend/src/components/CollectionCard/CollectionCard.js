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
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';


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

    // CHECKING WHICH ARRAY SHOULD BE RETURNED ---------------
    if(filteringCard=='yes'){
        cardArray = filteredProfile;
    }else{
        cardArray = "jdkejdk";
    }


    return (

        <Container sx={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}>

                {cardArray.map((array, index) => (
                    <Card key={index} sx={{ width: 350, borderRadius: '20px' }}>
                        <CardMedia
                            component="img"
                            alt="profile image"
                            sx={{ height: 200, width: 200, borderRadius: '50%', mx: 'auto', my: { xs: 5, sm: 10 } }}
                            image={`http://127.0.0.1:7878/profile_images/${array[11]}`}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {array[2]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Category: {array[10]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Tags: {array[9]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Location: {array[4]}
                            </Typography>
                        </CardContent>
                        <CardActions>
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
                        </CardActions>
                        <CardActions>
                            <IconButton onClick={() => handleAddToFavorites(array[0])}>
                                <FavoriteIcon />
                            </IconButton>
                            <Button component={Link} to={`/profile/${array[2]}`} size="small">View profile</Button>
                        </CardActions>
                    </Card>
                ))}

        </Container>
    );
}

export default CollectionCard;


