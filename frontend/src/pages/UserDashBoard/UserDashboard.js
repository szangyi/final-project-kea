import './UserDashboard.css';
// --------------------------
// REACT ---------------
// --------------------------
import React, { useState, useEffect } from 'react';
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
import MyCustomMenuMobile from '../../components/Drawer/MyCustomMenuMobile';
import AccountInfoAPI from '../../api/AccountInfoAPI';
import Loader from '../../components/Loader/Loader'
import ErrorPage from '../ErrorPage';
import { handleWindowSizeChange } from '../../util/detectMediaQuery'

const UserDashboard = (theme) => {

    // VARIABLES ---------------
    const [mediaQuery, setMediaQuery] = useState("");
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null)

    // HANDLERS ---------------
    const handleCloseError = () => {
        setError(null);
    };

    // API CALLS ---------------
    AccountInfoAPI(setUserData, setError);



    useEffect(() => {
        const handleResize = () => handleWindowSizeChange(setMediaQuery);
        handleResize()
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array to run the effect only once on mount


    
    
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
                                headline1="Hi"
                                headline2={userData.username}
                            />

                            <Box component="section" className="userdashboard-section">

                                {/* <Typography sx={{ pt: { xs: 1, md: 5 }, pb: { xs: 1, md: 2 }, px: { xs: 1, md: 3 } }} variant="h3">Account settings </Typography> */}

                                <Box className="userdashboard-section-container" sx={{
                                    gap: 2, flexGrow: 1,
                                    // py: { xs: 1, md: 3 }, pl: { xs: 1, md: 3 }, pr: { xs: 1, md: 3 }, 
                                    display: 'flex'
                                }}>
                                    {mediaQuery == 'mobile' && <MyCustomMenuMobile />}
                                    {mediaQuery == 'desktop' && <MyCustomDrawer />}
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