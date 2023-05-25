// --------------------------
// REACT ---------------
// --------------------------
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';

// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// --------------------------
// COMPONENTS ---------------
// --------------------------
import Profiles from '../../components/Influencer/Profiles';
import Banner from '../../components/Banner/Banner';
import Loader from '../../components/Loader/Loader'

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
      setInfluencerData(influencerData);

    } catch {
      console.log('Error');
    }
  };

  getInfluencerData();



  return (
    <>
      <Banner variant="medium" headline1="Influence people!" />
      <Box
        component="section"
        className="influencerdashboard-section bannerPadding"
        sx={{ pb: { xs: 2, md: 5 } }}>

        <Typography sx={{ pt: { xs: 1, md: 5 }, pb: { xs: 1, md: 0 }, px: { xs: 1, md: 3 } }} variant="h4">Your profiles </Typography>
        {influencerData === null ? (
          <Loader/>
        ) : (
          influencerData.result === "no profile" ? (
            <Box
              sx={{
                width: '100%',
                height: '200px',
                backgroundColor: '#A4B0FF',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Button
                href="/create-profile"
                startIcon={<AddIcon />}
              >
                Add your first profile
              </Button>
            </Box>
          ) : (
            <Box className="glassmorphism" sx={{ gap: 2, flexGrow: 1, py: { xs: 1, md: 3 }, pl: { xs: 1, md: 3 }, pr: { xs: 1, md: 8 }, display: 'flex' }}>

              <Profiles influencerData={influencerData} />

            </Box>
          )
        )}

      </Box>
    </>
  );

}

export default InfluencerPage;