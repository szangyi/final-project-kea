import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import theme from "./theme/theme.js"

// --------------------------
// COMPONENTS ---------------
// --------------------------
import Banner from './components/Banner/Banner';
import NavLoggedin from './components/Navigation/NavLoggedin';
import NavLoggedout from './components/Navigation/NavLoggedout';
import Login from './components/LoginSignup/Login';
import Signup from './components/LoginSignup/Signup';

// --------------------------
// PAGES --------------------
// --------------------------
import HomePage from './pages/HomePage';
import LoggedinHome from './pages/LoggedinHomePage'
import AccountInfo from './pages/AccountInfo';
import InfluencerPage from './pages/InfluencerPage'
import CreateProfilePage from './pages/CreateProfilePage';
import { authLoader } from './util/auth';

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/home", element: <LoggedinHome />},
  {path: "/login", element: <Login />},
  {path: "/signup", element: <Signup />},
  {path: "/collection", element: <HomePage />},
  {path: "/my-page", element: <HomePage />},
  {path: "/collection", element: <HomePage />},
  {path: "/my-interests", element: <HomePage />},
  {path: "/account-info", element: <AccountInfo />, loader: authLoader},
  {path: "/dashboard", element: <InfluencerPage />, loader: authLoader},
  {path: "/collection", element: <HomePage />},
  {path: "/create-profile", element: <CreateProfilePage />, loader: authLoader},
  {path: "/my-profiles", element: <HomePage />},

]);




const App = () => {
    return (
        <React.Fragment>
                {/* <NavLoggedin /> */}
                <NavLoggedout />
                {/* <Banner /> */}
                <RouterProvider router={router} />
        </React.Fragment>
    );

}

export default App;
