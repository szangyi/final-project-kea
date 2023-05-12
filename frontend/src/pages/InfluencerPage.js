import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';

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
      return (<div><a href="/create-profile">Add your first profile</a></div>);
    } else {
      return (<div><h2>Profile</h2>
        <div>
          {influencerData.map((array, index) => (
            <div key={index}>
              {<p>Name:{array[2]}</p>}
            </div>
          ))}
        </div>
        <a href="/create-profile">Add profile</a></div>);
    }
  };

  return <div>{InfluencerComponent()}</div>;




}

export default InfluencerPage;