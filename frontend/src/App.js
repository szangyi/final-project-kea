import { React, useState } from 'react';
import { createBrowserRouter, RouterProvider, useRouteLoaderData } from 'react-router-dom';
import theme from "./theme/theme.js"
import Cookies from 'js-cookie';
import { getAuthToken, authLoader } from './util/auth';

// --------------------------
// COMPONENTS ---------------
// --------------------------
import Banner from './components/Banner/Banner';
import NavLoggedin from './components/Navigation/NavLoggedin';
import NavLoggedout from './components/Navigation/NavLoggedout';
import Login from './components/LoginSignup/Login';
import Signup from './components/LoginSignup/Signup';
import Footer from './components/Footer/Footer.js';

// --------------------------
// PAGES --------------------
// --------------------------
import HomePage from './pages/HomePage';
import LoggedinHome from './pages/LoggedinHomePage'
import InfluencerPage from './pages/InfluencerPage'
import CreateProfilePage from './pages/CreateProfilePage';
import UserDashboard from './pages/UserDashBoard/UserDashboard.js';
import AccountInfo from './pages/UserDashBoard/AccountInfo';
import Interests from './pages/UserDashBoard/Interests';
import Security from './pages/UserDashBoard/Security';

import RootLayoutNav from './pages/Root/RootLayoutNav.js';
import RootLayout from './pages/Root/RootLayout.js';
import { Navigate } from 'react-router-dom';



const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayoutNav />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/home", element: <LoggedinHome />, loader: authLoader },
            { path: "/login", element: <Login /> },
            { path: "/signup", element: <Signup /> },
            {
                path: "/user-dashboard", element: <UserDashboard />, children: [
                    { path: "/user-dashboard/", element: <Navigate to="account-info" replace /> }, // set account-info as default
                    { path: "/user-dashboard/account-info", element: <AccountInfo />, loader: authLoader },
                    { path: "/user-dashboard/security", element: <Security />, loader: authLoader },
                    { path: "/user-dashboard/interests", element: <Interests />, loader: authLoader },
                ]
            },
            { path: "/dashboard", element: <InfluencerPage />, loader: authLoader },
            { path: "/create-profile", element: <CreateProfilePage />, loader: authLoader },
        ]
    },


    // To do:
    // { path: "/my-profiles", element: <HomePage /> },
    // { path: "/collection", element: <HomePage /> },
    // { path: "/collection", element: <HomePage /> },
    // { path: "/collection", element: <HomePage /> },
    // { path: "/my-interests", element: <HomePage /> },
]);


const App = (theme) => {

    const token = Cookies.get("token");

    return (
        <>
            {/* {token ? <NavLoggedin /> : <NavLoggedout />} */}

            <RouterProvider router={router} />

            {/* <Footer/> */}

        </>
    );

}

export default App;
