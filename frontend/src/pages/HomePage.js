import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import HomePageLoggedout from './HomePageLoggedout';
import HomePageLoggedin from './HomePageLoggedin'
import { getAuthToken } from '../util/auth';

const HomePage = () => {

    const token = useRouteLoaderData('root');
    // console.log({token})

    // const token = getAuthToken();
    // console.log(`homepagetoken: ${token}`)

    return token ? <HomePageLoggedin /> : <HomePageLoggedout />;


    // return <HomePageLoggedin />

}

export default HomePage;




