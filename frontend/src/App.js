import { React, useState } from 'react';
import { createBrowserRouter, RouterProvider, useRouteLoaderData } from 'react-router-dom';
import theme from "./theme/theme.js"
import Cookies from 'js-cookie';
import { getAuthToken, authLoader } from './util/auth';

// --------------------------
// COMPONENTS ---------------
// --------------------------
// import Login from './components/Login/Login';
// import SignupPage from './components/LoginSignupPage/_SignupPage.js';
import Footer from './components/Footer/Footer.js';

// --------------------------
// PAGES --------------------
// --------------------------
import HomePage from './pages/HomePage';
import HomePageLoggedin from './pages/HomePageLoggedin'
import InfluenceDashboardPage from './pages/InfluencerDashboard/InfluencerDashboardPage'
import CreateProfilePage from './pages/InfluencerDashboard/CreateProfilePage.js';
import UserDashboard from './pages/UserDashBoard/UserDashboard.js';
import AccountInfo from './pages/UserDashBoard/AccountInfo';
import Interests from './pages/UserDashBoard/Interests';
import Security from './pages/UserDashBoard/Security';
import RootLayoutNav from './pages/Root/RootLayoutNav.js';
import RootLayout from './pages/Root/RootLayout.js';
import { Navigate } from 'react-router-dom';
import ProfileLandingPage from './pages/ProfileLandingPage';
import CollectionPage from './pages/CollectionPage';
import UserCollectionPage from './pages/UserCollectionPage.js'
import Page404 from './pages/Page404'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'




const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayoutNav />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/home", element: <HomePageLoggedin />, loader: authLoader },
            { path: "/login", element: <LoginPage /> },
            { path: "/signup", element: <SignupPage /> },
            {
                path: "/user-dashboard", element: <UserDashboard />, children: [
                    { path: "/user-dashboard/", element: <Navigate to="account-info" replace /> }, // set account-info as default
                    { path: "/user-dashboard/account-info", element: <AccountInfo />, loader: authLoader },
                    { path: "/user-dashboard/security", element: <Security />, loader: authLoader },
                    { path: "/user-dashboard/interests", element: <Interests />, loader: authLoader },
                ]
            },
            { path: "/user-collection", element: <UserCollectionPage />, loader: authLoader },
            { path: "/influencer-dashboard", element: <InfluenceDashboardPage />, loader: authLoader },
            { path: "/collection", element: <CollectionPage />, loader: authLoader },
            { path: "/profile/:username", element: <ProfileLandingPage />, loader: authLoader },
            { path: '*', element: <Page404 replace /> },

            // To do:
            // { path: "/my-interests", element: <HomePage /> },
        ],

    },
    {
        path: '/create-profile',
        element: <RootLayout />,
        children: [
                 { path: "/create-profile", element: <CreateProfilePage />, loader: authLoader },

        ]
    }

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
