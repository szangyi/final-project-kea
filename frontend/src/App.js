// --------------------------
// REACT ---------------
// --------------------------
import { React, useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';


// --------------------------
// UTILS ---------------
// --------------------------
import { navLoader, navLoaderPublic } from './util/auth';


// --------------------------
// PAGES --------------------
// --------------------------
import InfluenceDashboardPage from './pages/InfluencerDashboard/InfluencerDashboardPage'
import CreateProfilePage from './pages/InfluencerDashboard/CreateProfilePage.js';
import UserDashboard from './pages/UserDashBoard/UserDashboard.js';
import AccountInfo from './pages/UserDashBoard/AccountInfo';
import Interests from './pages/UserDashBoard/Interests';
import Security from './pages/UserDashBoard/Security';
import ProfileLandingPage from './pages/ProfileLandingPage';
import CollectionPage from './pages/CollectionPage';
import UserCollectionPage from './pages/UserCollectionPage.js'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ErrorPage404 from './pages/ErrorPage404';
import HomePageLoggedout from './pages/HomePageLoggedout';
import HomePageLoggedin from './pages/HomePageLoggedin'
import RootLayoutNavLoggedin from './pages/Root/RootLayoutNavLoggedin.js';
import RootLayoutNavLoggedout from './pages/Root/RootLayoutNavLoggedout.js';
import RootLayout from './pages/Root/RootLayout.js';


const App = () => {

    const router = createBrowserRouter([
        {
            id: 'root',
            children: [
                {
                    // PROTECTED/ PRIVATE
                    id: 'private-root',
                    loader: navLoader,
                    children: [
                        {
                            element: <RootLayoutNavLoggedin />,
                            children: [
                                { path: "/home", element: <HomePageLoggedin /> },
                                {
                                    path: "/user-dashboard", element: <UserDashboard />, children: [
                                        { path: "/user-dashboard/", element: <Navigate to="account-info" replace /> }, // set account-info as default
                                        { path: "/user-dashboard/account-info", element: <AccountInfo /> },
                                        { path: "/user-dashboard/security", element: <Security /> },
                                        { path: "/user-dashboard/interests", element: <Interests /> },
                                    ]
                                },
                                { path: "/user-collection", element: <UserCollectionPage /> },
                                { path: "/influencer-dashboard", element: <InfluenceDashboardPage /> },
                                { path: "/collection", element: <CollectionPage /> },
                                { path: "/profile/:username", element: <ProfileLandingPage /> },
                            ]
                        },
                        {
                            element: <RootLayout />,
                            children: [
                                { path: '/create-profile', element: <CreateProfilePage /> }
                            ]
                        }
                    ],
                },
                {
                    // UNPROTECTED/ PUBLIC
                    id: 'public-root',
                    loader: navLoaderPublic,
                    children: [
                        {
                            element: <RootLayoutNavLoggedout />,
                            children: [
                                { path: "/", element: <HomePageLoggedout /> },
                                { path: "/login", element: <LoginPage /> },
                                { path: "/signup", element: <SignupPage /> },
                            ],
                        }
                    ]
                },

                { path: '*', element: <ErrorPage404 replace /> },

            ]
        },

    ]);




    return (
        <>
            <RouterProvider router={router} />
        </>
    );

}

export default App;
