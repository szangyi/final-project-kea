import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';

import { Box, Typography } from '@mui/material';



const Interests = () => {

    return (
        <>
            <Box component="section" sx={{
                    borderLeft: {sm:'1px solid lightgrey'},
                    py: {xs: 2, sm: 5}, px: {xs: 2, md: 5},
            }}>

            <Typography variant="h4" >Interests</Typography>
            <Typography variant="paragraph">Personalise your account and get recommendations based on your interests.</Typography>

        </Box >
        </>
    );

}

export default Interests;

