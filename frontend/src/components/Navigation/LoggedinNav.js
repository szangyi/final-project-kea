import { NavLink } from 'react-router-dom';
import {logout as logoutAction} from '../../pages/Logout'



const LoggedinNav= () =>{
    return (
        <header>
            <nav>
                <NavLink
                    to="#" onClick={logoutAction}>
                    Logout
                </NavLink>
            </nav>
        </header>
    );
}

export default LoggedinNav;