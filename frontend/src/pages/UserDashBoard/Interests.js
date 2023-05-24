import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';

import { Box, Typography } from '@mui/material';



const Interests = () => {

    return (
        <>
            <Box component="section" sx={{ py: 5, px: 5, }}>

                <Typography variant="h4" >interests</Typography>
                <Typography variant="paragraph">Personalise your account and get recommendations based on your interests.</Typography>

            </Box>
        </>
    );

}

export default Interests;

