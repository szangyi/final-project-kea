import React, { useState } from 'react';
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

const CollectionCard = ({ searchQuery, searchCategory, searchHashtag }) => {
    const token = Cookies.get('token');
    const [profilesData, setProfilesData] = useState(null);



    const collectionHandler = async () => {
        try {
            const response = await axios.get('/api/profiles', {
                headers: {
                    Authorization: `${token}`,
                }
            },
            );

            const profilesData = response.data;

            setProfilesData(profilesData);

        } catch {
            console.log('Getting all profiles failed:');
        }
    }

    collectionHandler();



    if (profilesData === null) {
        return <div>Loading data...</div>;
    }




    const filteredProfile = profilesData.filter((profile) => {
        const matchesSearchQuery = profile[2].toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory = searchCategory === 'All categories' || profile[10] === searchCategory;
        const convertHashtag = JSON.parse(profile[9]);

        const matchesHashtags = searchHashtag.length === 0 || convertHashtag.includes(searchHashtag);
        return matchesSearchQuery && matchesCategory && matchesHashtags;
    });


    return (


        <Container
            sx={{ display: 'flex', flexDirection: 'row', gap: '20px', flexWrap: 'wrap' }}
        >
            {filteredProfile.map((array, index) => (


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
                            {array[10]}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {array[9]}
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
                        <IconButton >
                            <FavoriteIcon />
                        </IconButton>                        
                        <Button component={Link} to={`/profile/${array[0]}`} size="small">View profile</Button>
                    </CardActions>
                </Card>
            ))}

        </Container>
    );




}

export default CollectionCard;


