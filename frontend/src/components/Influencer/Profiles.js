
import React from 'react';

const Profiles = (props) => {
    const influencerData = props.influencerData;
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
  
  export default Profiles;
  
  
  