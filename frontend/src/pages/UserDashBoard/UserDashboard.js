import './UserDashboard.css';
// --------------------------
// REACT ---------------
// --------------------------
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Outlet, useOutletContext, useNavigate, useRouteLoaderData } from "react-router-dom";
// --------------------------
// MATERIAL UI ---------------
// --------------------------
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// --------------------------
// COMPONENTS ---------------
// --------------------------
import Banner from '../../components/Banner/Banner';
import MyCustomDrawer from '../../components/Drawer/MyCustomDrawer';
import AccountInfoAPI from '../../api/AccountInfoAPI';
import Loader from '../../components/Loader/Loader'
import ErrorPage from '../ErrorPage';

const UserDashboard = (theme) => {

    // VARIABLES ---------------
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null)

    // HANDLERS ---------------
    const handleCloseError = () => {
        setError(null);
    };

    // API CALLS ---------------
    AccountInfoAPI( setUserData, setError);


    if (error) {
        return <ErrorPage error={error} />
    }

    return (
        <>
            {userData === null ? (
                <Loader />

            ) : (
                <>
                    {userData === "error" ? (
                        <>
                            {error && <Error error={error} onClose={handleCloseError} />}
                        </>
                    ) : (
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
                    )}

                </>
            )}
        </>
    )


}

export default UserDashboard;