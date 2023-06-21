import { Outlet } from "react-router-dom";
import NavLoggedin from '../../components/Navigation/NavLoggedin'


function RootLayoutNavLoggedin() {

    return (
        <>
            <NavLoggedin></NavLoggedin>
            <Outlet />
        </>
    )
}

export default RootLayoutNavLoggedin