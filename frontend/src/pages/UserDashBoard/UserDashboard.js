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

            <Box component="main" sx={{ flexGrow: 1, p: 3, display: 'flex' }}>

                <MyCustomDrawer />
                <Outlet context={userData}/>

                {/* {React.cloneElement(outletContext?.element, { userData })} */}
                {/* {outletContext?.element && React.cloneElement(outletContext.element, { userData })} */}

                {/* <AccountInfo userData={userData}/> */}

            </Box>

        </>
    )


}

export default UserDashboard;