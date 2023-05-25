import { React, useState } from 'react';
import { createBrowserRouter, RouterProvider, useRouteLoaderData } from 'react-router-dom';
import theme from "./theme/theme.js"
import Cookies from 'js-cookie';


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
import AccountInfo from './pages/AccountInfo';
import InfluencerPage from './pages/InfluencerPage'
import CreateProfilePage from './pages/CreateProfilePage';
import { getAuthToken, authLoader } from './util/auth';
import ProfileLandingPage from './pages/ProfileLandingPage';
import CollectionPage from './pages/CollectionPage';
import Page404 from './pages/Page404'

const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/home", element: <LoggedinHome />, loader: authLoader },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/my-page", element: <HomePage /> },
    { path: "/my-interests", element: <HomePage /> },
    { path: "/account-info", element: <AccountInfo />, loader: authLoader },
    { path: "/dashboard", element: <InfluencerPage />, loader: authLoader },
    { path: "/collection", element: <CollectionPage />, loader: authLoader  },
    { path: "/create-profile", element: <CreateProfilePage />, loader: authLoader },
    { path: "/my-profiles", element: <HomePage /> },
    {path: "/profile/:username", element: <ProfileLandingPage />, loader: authLoader},
    {path: '*', element: <Page404 replace />},

]);


const App = (theme) => {

    const token = Cookies.get("token");

    return (
        <div>
            { token ?  <NavLoggedin /> :  <NavLoggedout /> }

            <RouterProvider router={router} />

            {/* <Footer/> */}

        </div>
    );

}

export default App;
