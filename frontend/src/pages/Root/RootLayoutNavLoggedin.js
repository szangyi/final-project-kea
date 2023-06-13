import Cookies from 'js-cookie';
import {useState, useEffect} from 'react'
import { Outlet, useRouteLoaderData } from "react-router-dom";
import NavLoggedin from '../../components/Navigation/NavLoggedin'
import NavLoggedout from '../../components/Navigation/NavLoggedout'
import Nav from '../../components/Navigation/Nav';


function RootLayoutNavLoggedin() {

    // const token = Cookies.get("token");
    // const token = useRouteLoaderData('root');

    return (
        <>
            {/* {token ? <NavLoggedin /> : <NavLoggedout />} */}

            <NavLoggedin></NavLoggedin>

            <Outlet />
        </>
    )
}

export default RootLayoutNavLoggedin