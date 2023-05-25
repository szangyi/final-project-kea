import React, { useState } from 'react';
import Container from "@mui/material/Container";
import { dividerClasses } from '@mui/material';



const Profiles = (props) => {


    const profileData = props.profileData;
    return (
        <Container>
            {profileData.map((data, index) => (
                <div key={index}>
                    <p>Username:{data[2]}</p>
                </div>


                

            ))}

        </Container>
    );




}

export default Profiles;


