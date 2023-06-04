import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import NavLoggedin from '../../components/Navigation/NavLoggedin'
import NavLoggedout from '../../components/Navigation/NavLoggedout'


const Nav = () => {

    const token = useRouteLoaderData('root');
    console.log({token})

    // const token = getAuthToken();
    // console.log(`homepagetoken: ${token}`)

    return token ? <NavLoggedin /> : <NavLoggedout />;


    // return <HomePageLoggedin />

}

export default Nav;




