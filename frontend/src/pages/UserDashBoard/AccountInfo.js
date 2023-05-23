import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import { Box, Typography } from '@mui/material';


const AccountInfo = (props) => {

    const userData = useOutletContext(); // data from UserDashBoard

    return (
        <>
            <Box component="section" sx={{ py: 3, px:8, }}>

                <Typography variant="h3" >account settings</Typography>
                <Typography variant="paragraph">Here you can edit public information about yourself.</Typography>
                
                <div>Hi {userData.username}</div>
                <div>First name {userData.firstName}</div>
                <div>last name {userData.lastName}</div>
                <div>username {userData.username}</div>
                <div>image {userData.image}</div>

            </Box>
        </>
    );

}

export default AccountInfo;