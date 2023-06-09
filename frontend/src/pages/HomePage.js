import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import HomePageLoggedout from './HomePageLoggedout';
import HomePageLoggedin from './HomePageLoggedin'
import { getAuthToken } from '../util/auth';

const HomePage = () => {

    const token = useRouteLoaderData('root');

    // return token === true ? <HomePageLoggedin /> : (token === false ? <HomePageLoggedout /> : null);
    return token ? <HomePageLoggedin /> : <HomePageLoggedout />;


}

export default HomePage;




