import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

import { Typography } from '@mui/material';
import Banner from './components/Banner';
import Button from './components/Button';
import BokehBackground from './components/BokehBackground';
import Nav from './components/Nav';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import Button from '@mui/material/Button';


import Login from './components/LoginSignup/Login';
import Signup from './components/LoginSignup/Signup';
import HomePage from './pages/HomePage';
import AccountInfo from './pages/AccountInfo';
import { authLoader } from './util/auth';

const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/home", element: <HomePage /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/collection", element: <HomePage /> },
    { path: "/my-page", element: <HomePage /> },
    { path: "/collection", element: <HomePage /> },
    { path: "/my-interests", element: <HomePage /> },
    { path: "/account-info", element: <AccountInfo />, loader: authLoader },
    { path: "/dashboard", element: <HomePage /> },
    { path: "/collection", element: <HomePage /> },
    { path: "/register", element: <HomePage /> },
    { path: "/my-profiles", element: <HomePage /> },
]);

const App = () => {
    return (
        <React.Fragment>
            <Nav />
            <Banner />
            <RouterProvider router={router} />
        </React.Fragment>
    );

}

export default App;
