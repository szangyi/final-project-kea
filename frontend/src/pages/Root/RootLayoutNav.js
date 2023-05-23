import Cookies from 'js-cookie';
import { Outlet } from "react-router-dom";
import NavLoggedin from '../../components/Navigation/NavLoggedin'
import NavLoggedout from '../../components/Navigation/NavLoggedout'

function RootLayoutNav() {

    const token = Cookies.get("token");

    return (
        <>
            {token ? <NavLoggedin /> : <NavLoggedout />}

            <Outlet />
        </>
    )
}

export default RootLayoutNav