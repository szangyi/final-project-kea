import Cookies from 'js-cookie';
import { Outlet } from "react-router-dom";
import NavLoggedin from '../../components/Navigation/NavLoggedin'
import NavLoggedout from '../../components/Navigation/NavLoggedout'
import { SnackbarProvider } from '../../components/SnackBar/SnackBarContext';

function RootLayoutNav() {

    const token = Cookies.get("token");

    return (
        <>
            <SnackbarProvider>
                {token ? <NavLoggedin /> : <NavLoggedout />}
                <Outlet />
            </SnackbarProvider>
        </>
    )
}

export default RootLayoutNav