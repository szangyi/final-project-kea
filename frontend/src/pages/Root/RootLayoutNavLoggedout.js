import { Outlet } from "react-router-dom";
import NavLoggedout from '../../components/Navigation/NavLoggedout'


function RootLayoutNavLoggedout() {
    return (
        <>
            <NavLoggedout></NavLoggedout>
            <Outlet />
        </>
    )
}

export default RootLayoutNavLoggedout