// --------------------------
// SYSTEM -------------------
// --------------------------
import { React, useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { getAuthToken, authLoader } from './util/auth';

// --------------------------
// COMPONENTS ---------------
// --------------------------
import Footer from './components/Footer/Footer.js';

// --------------------------
// PAGES --------------------
// --------------------------
import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';
import LoggedinHome from './pages/HomePageLoggedin'
import InfluencerPage from './pages/InfluencerPage'
import CreateProfilePage from './pages/CreateProfilePage';
import UserDashboard from './pages/UserDashBoard/UserDashboard.js';
import AccountInfo from './pages/UserDashBoard/AccountInfo';
import Interests from './pages/UserDashBoard/Interests';
import Security from './pages/UserDashBoard/Security';
import ProfileLandingPage from './pages/ProfileLandingPage';
import CollectionPage from './pages/CollectionPage';
import Page404 from './pages/Page404'
import RootLayoutNav from './pages/Root/RootLayoutNav.js';
import RootLayout from './pages/Root/RootLayout.js';


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
            { path: "/collection", element: <CollectionPage />, loader: authLoader },
            { path: "/create-profile", element: <CreateProfilePage />, loader: authLoader },
            { path: "/profile/:username", element: <ProfileLandingPage />, loader: authLoader },
            { path: '*', element: <Page404 replace /> },

            // To do:
            // { path: "/my-interests", element: <HomePage /> },
        ]
    },

]);


const App = (theme) => {

    const token = Cookies.get("token");

    return (
        <>
            <RouterProvider router={router} />
        </>
    );

}

export default App;
