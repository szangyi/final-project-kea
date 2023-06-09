
import { useNavigate, useRouteLoaderData } from "react-router-dom";
import NavLoggedin from '../../components/Navigation/NavLoggedin'
import NavLoggedout from '../../components/Navigation/NavLoggedout'


const Nav = () => {

    const token = useRouteLoaderData('root');
    console.log(token)
    // console.log({token})

    // const token = getAuthToken();
    // console.log(`homepagetoken: ${token}`)

    return token ? <NavLoggedin /> : (token === false ? <NavLoggedout /> : null);;


    // return <HomePageLoggedin />

}

export default Nav;




