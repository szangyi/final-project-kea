
import { NavLink } from 'react-router-dom';

const LoggedinHomePage= () =>{


    return (
        <header>
        <nav>
            <NavLink
                to="/account-info">
                Account info
            </NavLink>
            <NavLink
                to="/dashboard">
                Switch to influencer
            </NavLink>
        </nav>
    </header>
    )
}

export default LoggedinHomePage;