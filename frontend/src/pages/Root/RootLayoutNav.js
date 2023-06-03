import Cookies from 'js-cookie';
import { Outlet, useRouteLoaderData } from "react-router-dom";
import NavLoggedin from '../../components/Navigation/NavLoggedin'
import NavLoggedout from '../../components/Navigation/NavLoggedout'


function RootLayoutNav() {

    // const token = Cookies.get("token");
    const token = useRouteLoaderData('root');

    return (
        <>
            {token ? <NavLoggedin /> : <NavLoggedout />}

            {/* <Nav></Nav> */}

            <Outlet />
        </>
    )
}

export default RootLayoutNav