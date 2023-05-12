import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import AddFirstProfile from '../components/Influencer/AddFirstProfile';
import Profiles from '../components/Influencer/Profiles';

const InfluencerPage = () => {

  const [influencerData, setInfluencerData] = useState(null);
  const token = Cookies.get('token');

  const getInfluencerData = async () => {
    try {
      const response = await axios.get('/get-influencer', {
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
      influencerData = {influencerData}
      />
    }
  };

  return <div>{InfluencerComponent()}</div>;




}

export default InfluencerPage;