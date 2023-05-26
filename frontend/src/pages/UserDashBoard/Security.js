import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';

import { Box, Typography } from '@mui/material';


const Security = () => {

    return (
        <>
            <Box component="section" className="glassmorphism"  sx={{ py: 5, px: 5, }}>

                <Typography variant="h4" >security</Typography>
                <Typography variant="paragraph">Here you can change how you access your account.</Typography>

            </Box>
        </>
    );

}

export default Security;


