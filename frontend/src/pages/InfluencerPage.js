import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import AddFirstProfile from '../components/Influencer/AddFirstProfile';
import Profiles from '../components/Influencer/Profiles';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import backgroundImage from '../public/dashboard.png';
import MeshGradient from "../components/MeshGradient/MeshGradient"

const InfluencerPage = () => {

  const [influencerData, setInfluencerData] = useState(null);
  const token = Cookies.get('token');

  const getInfluencerData = async () => {
    try {
      const response = await axios.get('/api/get-influencer', {
        headers: {
          Authorization: `${token}`,
        }
      });
      const influencerData = response.data;
      const error = response.data.error;


      setInfluencerData(influencerData);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  getInfluencerData();

  if (influencerData === null) {
    return <div>Loading your data...</div>;
  }

  const InfluencerComponent = () => {

    if (influencerData == "no profile") {
      return <AddFirstProfile />;
    } else {
      return <Profiles
        influencerData={influencerData}
      />
    }
  };

  return (
    <React.Fragment>
      <Container maxWidth="xl" >


        <Box
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '200px',
            width: '100%',
          }}
        >
          Influence people
        </Box>

        <Container
          sx={{
            maxWidth: 'xl',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }} >
          <h2>Profiles</h2>

          {InfluencerComponent()}

        </Container>

      </Container>
    </React.Fragment>
  );




}

export default InfluencerPage;