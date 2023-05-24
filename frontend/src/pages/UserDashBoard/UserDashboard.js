import './UserDashboard.css';

import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Outlet, useOutletContext, useNavigate, useRouteLoaderData } from "react-router-dom";

import Banner from '../../components/Banner/Banner';
import MyCustomDrawer from '../../components/Drawer/MyCustomDrawer';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountInfo from './AccountInfo';


const UserDashboard = (theme) => {

    const [userData, setUserData] = useState(null);
    const token = Cookies.get('token');

    const getUserData = async () => {
        try {
            const response = await axios.get('/api/account-info', {
                headers: {
                    Authorization: `${token}`,
                }
            });
            const userData = response.data;
            const error = response.data.error;

            setUserData(userData);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    getUserData();

    if (userData === null) {
        return <div>Loading your data...</div>;
    }

    return (
        <>

            <Banner variant="medium"
                headline1="Hi you"
            // add username here
            />

            <Box component="section" className="userdashboard-section">

                <Typography sx={{ pt: { xs: 1, md: 5 }, pb: { xs: 1, md: 0 }, px: { xs: 1, md: 3 } }} variant="h4">account settings </Typography>

                <Box className="userdashboard-section-container" sx={{ gap: 2, flexGrow: 1, py: { xs: 1, md: 3 }, pl: { xs: 1, md: 3 }, pr: { xs: 1, md: 8 }, display: 'flex' }}>

                    <MyCustomDrawer />
                    <Outlet context={userData} />

                </Box>
            </Box>

        </>
    )


}

export default UserDashboard;